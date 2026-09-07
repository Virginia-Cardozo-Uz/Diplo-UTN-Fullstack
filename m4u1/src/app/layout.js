
import "./globals.css";


export const metadata = {
  title: "Aprender Next",
  description: "Primer ejercicio de aprendizaje de Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
