import "../../styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/server/NavBar";
import Container from "@/components/server/Container";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "next-template",
  description: "Next.js template",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "TypeScript"],
  authors: [{ name: "Urotea" }],
  colorScheme: "light",
  creator: "Urotea",
  publisher: "",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {},
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="ja" className={inter.className}>
      <body>
        <NavBar title="next-template" />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
