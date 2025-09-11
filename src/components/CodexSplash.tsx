"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function makeNoise(seed = 1337) {
  let s = seed >>> 0;
  const rand = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  const p = new Uint8Array(512);
  const base = new Uint8Array(256);
  for (let i = 0; i < 256; i++) base[i] = i;
  for (let i = 255; i >= 0; i--) {
    const j = (rand() * (i + 1)) | 0;
    [base[i], base[j]] = [base[j], base[i]];
  }
  for (let i = 0; i < 512; i++) p[i] = base[i & 255];
  const grad = (h: number, x: number, y: number, z: number) => {
    const u = (h & 1) === 0 ? x : -x;
    const v = (h & 2) === 0 ? y : -y;
    return u + v + ((h & 4) === 0 ? z : -z) * 0.5;
  };
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a: number, b: number, t: number) => a + t * (b - a);
  function noise3(x: number, y: number, z: number) {
    const X = Math.floor(x) & 255,
      Y = Math.floor(y) & 255,
      Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = fade(x), v = fade(y), w = fade(z);
    const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z;
    const B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
    return lerp(
      lerp(
        lerp(grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z), u),
        lerp(grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z), u),
        v
      ),
      lerp(
        lerp(grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1), u),
        lerp(grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1), u),
        v
      ),
      w
    );
  }
  return { noise3 };
}

type Props = {
  cols?: number;
  rows?: number;
  scale?: number;
  speed?: number;
  seed?: number;
  className?: string;
  maxCols?: number;
  maxRows?: number;
};

const AsciiGradientField: React.FC<Props> = ({
  cols,
  rows,
  scale = 0.14,
  speed = 2.5,
  seed = 1337,
  className = "",
  maxCols = 280,
  maxRows = 120,
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const preRef = useRef<HTMLPreElement | null>(null);
  const [grid, setGrid] = useState(() => ({
    cols: cols ?? 160,
    rows: rows ?? 48,
  }));

  // --- Auto-fit cols/rows to container size ---
  useLayoutEffect(() => {
    if (cols && rows) return; // user forced sizes
    const wrap = wrapRef.current;
    const pre = preRef.current;
    if (!wrap || !pre) return;

    const measure = () => {
      const { width, height } = wrap.getBoundingClientRect();
      // create a hidden probe to measure monospace cell
      const probe = document.createElement("span");
      probe.textContent = "M";
      probe.style.visibility = "hidden";
      probe.style.position = "absolute";
      pre.appendChild(probe);
      const r = probe.getBoundingClientRect();
      pre.removeChild(probe);
      const cw = Math.max(1, r.width);
      const ch = Math.max(1, r.height);
      const newCols = Math.min(maxCols, Math.max(8, Math.floor(width / cw)));
      const newRows = Math.min(maxRows, Math.max(6, Math.floor(height / ch)));
      setGrid(g => (g.cols === newCols && g.rows === newRows ? g : { cols: newCols, rows: newRows }));
    };

    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    measure();
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [cols, rows, maxCols, maxRows]);

  // --- Animation ---
  useEffect(() => {
    const pre = preRef.current!;
    const { noise3 } = makeNoise(seed);

    const C = cols ?? grid.cols;
    const R = rows ?? grid.rows;

    const mask = new Uint8Array(C * R);
    const neigh = new Uint8Array(C * R);
    const dist = new Float32Array(C * R);

    const idx = (x: number, y: number) => y * C + x;

    // lighting
    const light = { x: -0.4, y: -0.6, z: 0.7 };
    const invLen = 1 / Math.hypot(light.x, light.y, light.z);
    light.x *= invLen; light.y *= invLen; light.z *= invLen;

    let raf = 0;
    let t = 0, last = performance.now();

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      t += dt * speed;

      const threshold = 0.15 + 0.15 * Math.sin(t * 0.7);

      for (let y = 0; y < R; y++) {
        for (let x = 0; x < C; x++) {
          const nx = x * scale, ny = y * scale;
          const h1 = noise3(nx, ny, t * 0.45);
          const h2 = noise3(nx * 2.03, ny * 2.03, t * 0.82) * 0.5;
          const h = (h1 + h2) * 0.7;
          const i = idx(x, y);
          mask[i] = h > threshold ? 1 : 0;
          neigh[i] = 0;
          dist[i] = mask[i] ? 0 : 1e9;
        }
      }

      // neighbor counts
      for (let y = 0; y < R; y++) {
        for (let x = 0; x < C; x++) {
          if (!mask[idx(x, y)]) continue;
          let c = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue;
              const xx = x + dx, yy = y + dy;
              if (xx < 0 || yy < 0 || xx >= C || yy >= R) continue;
              if (mask[idx(xx, yy)]) c++;
            }
          }
          neigh[idx(x, y)] = c;
        }
      }

      // distance field (outside)
      const W1 = 1.0, Wd = 1.4142;
      for (let y = 0; y < R; y++) {
        for (let x = 0; x < C; x++) {
          const i = idx(x, y);
          let d = dist[i];
          if (x > 0) d = Math.min(d, dist[i - 1] + W1);
          if (y > 0) d = Math.min(d, dist[i - C] + W1);
          if (x > 0 && y > 0) d = Math.min(d, dist[i - C - 1] + Wd);
          if (x + 1 < C && y > 0) d = Math.min(d, dist[i - C + 1] + Wd);
          dist[i] = d;
        }
      }
      for (let y = R - 1; y >= 0; y--) {
        for (let x = C - 1; x >= 0; x--) {
          const i = idx(x, y);
          let d = dist[i];
          if (x + 1 < C) d = Math.min(d, dist[i + 1] + W1);
          if (y + 1 < R) d = Math.min(d, dist[i + C] + W1);
          if (x + 1 < C && y + 1 < R) d = Math.min(d, dist[i + C + 1] + Wd);
          if (x > 0 && y + 1 < R) d = Math.min(d, dist[i + C - 1] + Wd);
          dist[i] = d;
        }
      }

      // draw
      let out = "";
      for (let y = 0; y < R; y++) {
        for (let x = 0; x < C; x++) {
          const nx = x * scale, ny = y * scale;
          const h = (noise3(nx, ny, t * 0.45) + noise3(nx * 2.03, ny * 2.03, t * 0.82) * 0.5) * 0.7;
          const hx =
            (noise3((x + 1) * scale, ny, t * 0.45) - noise3((x - 1) * scale, ny, t * 0.45)) * 0.5;
          const hy =
            (noise3(nx, (y + 1) * scale, t * 0.45) - noise3(nx, (y - 1) * scale, t * 0.45)) * 0.5;
          const nxn = -hx, nyn = -hy, nzn = 1.0;
          const nlen = 1 / Math.hypot(nxn, nyn, nzn);
          const L = (nxn * light.x + nyn * light.y + nzn * light.z) * nlen;
          const shade = (L * 0.5 + 0.5) * 0.9 + 0.1;

          const i = idx(x, y);
          const inside = mask[i] === 1;
          let ch = " ";

          if (inside) {
            ch = neigh[i] >= 7 ? "%" : "#";
          } else {
            let touches = false;
            for (let dy = -1; dy <= 1 && !touches; dy++) {
              for (let dx = -1; dx <= 1 && !touches; dx++) {
                if (dx === 0 && dy === 0) continue;
                const xx = x + dx, yy = y + dy;
                if (xx < 0 || yy < 0 || xx >= C || yy >= R) continue;
                if (mask[idx(xx, yy)]) touches = true;
              }
            }
            if (touches) {
              ch = (x + y) & 1 ? "*" : "+";
            } else {
              const rim = 10;
              const d = Math.min(dist[i] / rim, 1);
              const v = Math.min(1, Math.max(0, (1 - d) * 0.6 + shade * 0.4));
              if (v > 0.75) ch = "=";
              else if (v > 0.5) ch = "-";
              else if (v > 0.25) ch = ":";
              else ch = ".";
            }
          }

          out += ch;
        }
        out += "\n";
      }
      pre.textContent = out;
      raf = requestAnimationFrame(step);
    };

    const rafId = requestAnimationFrame(step);
    raf = rafId;
    return () => cancelAnimationFrame(raf);
  }, [grid.cols, grid.rows, cols, rows, scale, speed, seed]);

  return (
    <div
      // Fill the page (or parent) — tweak as you like:
      className={`fixed inset-0 bg-black overflow-hidden ${className}`}
      ref={wrapRef}
      style={{ userSelect: "none" }}
    >
      <pre
        ref={preRef}
        className="m-0 p-0 text-white/15"
        style={{
          position: "absolute",
          inset: 0,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          // keep these responsive; the observer will still measure them
          fontSize: "clamp(8px, 1.25vw, 12px)",
          lineHeight: "0.9",
          letterSpacing: "0.08em",
          whiteSpace: "pre",
        }}
        aria-label="ASCII gradient animation"
      />
    </div>
  );
};

export default AsciiGradientField;