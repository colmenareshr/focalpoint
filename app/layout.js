import "./globals.scss";

export const metadata = {
  title: "FocalPoint",
  description: "Planejador de tarefas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
