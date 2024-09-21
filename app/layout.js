import localFont from "next/font/local";
import "./globals.css";

const interTight = localFont({
  src: "./fonts/InterTight-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FocalPoint",
  description: "Planejador de tarefas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable}`}>
        {children}
      </body>
    </html>
  );
}
