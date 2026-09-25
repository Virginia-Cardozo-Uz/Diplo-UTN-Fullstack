
import "@/styles/globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Freelancer 2026",
  description: "Servicios Freelancer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

        <header>
          <div className="header">
          <img src="/img/header.png"  alt="Virginia Cardozo Uz, Freelancer"/>
          </div>
         </header>
        
        <Nav/>
        
        {children}
        <footer class="footer">
        <p>Todos los derechos reservados. Virginia Cardozo Uz, Freelancer</p>
        </footer>



      </body>
    </html>
  );
}
