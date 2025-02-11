import ComponentProvider from "@/components/provider/component-provider";
import ThemeProvider from "@/components/provider/theme-provider";
import VercelProvider from "@/components/provider/vercel-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? ""),
  title: "LEXA",
  description:
    "Empowering Legal Professional throug Cutting-edge AI Solutions.",
  generator: "Next.js",
  applicationName: "LEXA",
  referrer: "strict-origin-when-cross-origin",
  creator: "Lazuardy",
  publisher: "Lazuardy",
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  category:
    "legal tech, artificial intelligence, law, technology, innovation, legal solutions, saas, legal platform, business, generative ai",
  keywords: [
    "lexa",
    "law",
    "legal",
    "research",
    "legal tech",
    "ai legal assistant",
    "law and regulation",
    "legal research",
    "case analysis",
    "contract review",
    "artificial intelligence",
    "voice-enabled assistant",
    "indonesian law",
    "legal solutions",
    "legal platform",
    "law portal",
    "legal innovation",
    "generative ai",
    "saas",
  ],
  authors: [{ name: "Lazuardy", url: process.env.NEXT_PUBLIC_APP_URL }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  maximumScale: 1, // disable auto-zoom on mobile safari
  themeColor: [{ color: "#171717" }],
};

const LIGHT_THEME_COLOR = "#171717";
const DARK_THEME_COLOR = "hsl(240deg 10% 3.92%)";
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
      </head>
      <body className="antialiased bg-main">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <ComponentProvider />
        </ThemeProvider>
        <VercelProvider />
      </body>
    </html>
  );
}
