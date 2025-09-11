module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/CodexSplash.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function makeNoise(seed = 1337) {
    let s = seed >>> 0;
    const rand = ()=>(s = s * 1664525 + 1013904223 >>> 0) / 4294967296;
    const p = new Uint8Array(512);
    const base = new Uint8Array(256);
    for(let i = 0; i < 256; i++)base[i] = i;
    for(let i = 255; i >= 0; i--){
        const j = rand() * (i + 1) | 0;
        [base[i], base[j]] = [
            base[j],
            base[i]
        ];
    }
    for(let i = 0; i < 512; i++)p[i] = base[i & 255];
    const grad = (h, x, y, z)=>{
        const u = (h & 1) === 0 ? x : -x;
        const v = (h & 2) === 0 ? y : -y;
        return u + v + ((h & 4) === 0 ? z : -z) * 0.5;
    };
    const fade = (t)=>t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a, b, t)=>a + t * (b - a);
    function noise3(x, y, z) {
        const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        const u = fade(x), v = fade(y), w = fade(z);
        const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z;
        const B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
        return lerp(lerp(lerp(grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z), u), lerp(grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z), u), v), lerp(lerp(grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1), u), lerp(grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1), u), v), w);
    }
    return {
        noise3
    };
}
const AsciiGradientField = ({ cols, rows, scale = 0.14, speed = 2.5, seed = 1337, className = "", maxCols = 280, maxRows = 120 })=>{
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            cols: cols ?? 160,
            rows: rows ?? 48
        }));
    // --- Auto-fit cols/rows to container size ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (cols && rows) return; // user forced sizes
        const wrap = wrapRef.current;
        const pre = preRef.current;
        if (!wrap || !pre) return;
        const measure = ()=>{
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
            setGrid((g)=>g.cols === newCols && g.rows === newRows ? g : {
                    cols: newCols,
                    rows: newRows
                });
        };
        const ro = new ResizeObserver(measure);
        ro.observe(wrap);
        measure();
        window.addEventListener("resize", measure);
        return ()=>{
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [
        cols,
        rows,
        maxCols,
        maxRows
    ]);
    // --- Animation ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pre = preRef.current;
        const { noise3 } = makeNoise(seed);
        const C = cols ?? grid.cols;
        const R = rows ?? grid.rows;
        const mask = new Uint8Array(C * R);
        const neigh = new Uint8Array(C * R);
        const dist = new Float32Array(C * R);
        const idx = (x, y)=>y * C + x;
        // lighting
        const light = {
            x: -0.4,
            y: -0.6,
            z: 0.7
        };
        const invLen = 1 / Math.hypot(light.x, light.y, light.z);
        light.x *= invLen;
        light.y *= invLen;
        light.z *= invLen;
        let raf = 0;
        let t = 0, last = performance.now();
        const step = (now)=>{
            const dt = (now - last) / 1000;
            last = now;
            t += dt * speed;
            const threshold = 0.15 + 0.15 * Math.sin(t * 0.7);
            for(let y = 0; y < R; y++){
                for(let x = 0; x < C; x++){
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
            for(let y = 0; y < R; y++){
                for(let x = 0; x < C; x++){
                    if (!mask[idx(x, y)]) continue;
                    let c = 0;
                    for(let dy = -1; dy <= 1; dy++){
                        for(let dx = -1; dx <= 1; dx++){
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
            for(let y = 0; y < R; y++){
                for(let x = 0; x < C; x++){
                    const i = idx(x, y);
                    let d = dist[i];
                    if (x > 0) d = Math.min(d, dist[i - 1] + W1);
                    if (y > 0) d = Math.min(d, dist[i - C] + W1);
                    if (x > 0 && y > 0) d = Math.min(d, dist[i - C - 1] + Wd);
                    if (x + 1 < C && y > 0) d = Math.min(d, dist[i - C + 1] + Wd);
                    dist[i] = d;
                }
            }
            for(let y = R - 1; y >= 0; y--){
                for(let x = C - 1; x >= 0; x--){
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
            for(let y = 0; y < R; y++){
                for(let x = 0; x < C; x++){
                    const nx = x * scale, ny = y * scale;
                    const h = (noise3(nx, ny, t * 0.45) + noise3(nx * 2.03, ny * 2.03, t * 0.82) * 0.5) * 0.7;
                    const hx = (noise3((x + 1) * scale, ny, t * 0.45) - noise3((x - 1) * scale, ny, t * 0.45)) * 0.5;
                    const hy = (noise3(nx, (y + 1) * scale, t * 0.45) - noise3(nx, (y - 1) * scale, t * 0.45)) * 0.5;
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
                        for(let dy = -1; dy <= 1 && !touches; dy++){
                            for(let dx = -1; dx <= 1 && !touches; dx++){
                                if (dx === 0 && dy === 0) continue;
                                const xx = x + dx, yy = y + dy;
                                if (xx < 0 || yy < 0 || xx >= C || yy >= R) continue;
                                if (mask[idx(xx, yy)]) touches = true;
                            }
                        }
                        if (touches) {
                            ch = x + y & 1 ? "*" : "+";
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
        return ()=>cancelAnimationFrame(raf);
    }, [
        grid.cols,
        grid.rows,
        cols,
        rows,
        scale,
        speed,
        seed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        // Fill the page (or parent) — tweak as you like:
        className: `fixed inset-0 bg-black overflow-hidden ${className}`,
        ref: wrapRef,
        style: {
            userSelect: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            ref: preRef,
            className: "m-0 p-0 text-white/15",
            style: {
                position: "absolute",
                inset: 0,
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                // keep these responsive; the observer will still measure them
                fontSize: "clamp(8px, 1.25vw, 12px)",
                lineHeight: "0.9",
                letterSpacing: "0.08em",
                whiteSpace: "pre"
            },
            "aria-label": "ASCII gradient animation"
        }, void 0, false, {
            fileName: "[project]/src/components/CodexSplash.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CodexSplash.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AsciiGradientField;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/TopBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/TopBar.tsx
__turbopack_context__.s([
    "default",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function TopBar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || "/";
    const linkBase = "text-xl px-2 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 ring-neutral-500 font-mono text-sm tracking-wide";
    const item = (href, label, asciiWrap)=>{
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            "aria-current": active ? "page" : undefined,
            className: `${linkBase} ${active ? "text-white" : "text-neutral-300 hover:text-white"}`,
            children: asciiWrap(label)
        }, href, false, {
            fileName: "[project]/src/components/TopBar.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 inset-x-0 z-20 h-15",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: " mx-auto mt-3 mb-2 max-w-6xl rounded-2xl border bg-neutral-900/70 border-neutral-800/70 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur h-full ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-2 h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        item("/", "home", (s)=>`[ ${s} ]`),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-neutral-600 select-none",
                            children: "::"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TopBar.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        item("/experience", "experience", (s)=>`[ ${s} ]`),
                        item("/blog", "blog", (s)=>`[ ${s} ]`)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TopBar.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TopBar.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TopBar.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TopBar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f7f621ce._.js.map