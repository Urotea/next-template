import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="ja">
      <head />
      <body>{children}</body>
    </html>
  );
}
