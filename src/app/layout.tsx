import "./globals.css";
import AsciiGradientField from "@/components/CodexSplash";
import TopBar from "@/components/TopBar";

export const metadata = { title: "Your Name", description: "Personal site" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="min-h-screen text-neutral-200">
        {/* site-wide background */}
        <AsciiGradientField
          className="z-0 pointer-events-none" // sits behind everything & doesn't block clicks
          scale={0.10}
          speed={1.1}
        />

        {/* overlay nav */}
        <TopBar />

        {/* page content */}
        <main className="relative pt-16"> {/* padding makes space under the top bar */}
          {children}
        </main>
      </body>
    </html>
  );
}