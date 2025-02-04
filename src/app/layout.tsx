import "./globals.css";
import { merriweather, roboto } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${merriweather.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
