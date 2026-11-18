'use client';


import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {

        const pathname = usePathname();
        const isActive = (path) => path === pathname;


    return(
         <div className="nav-bg">
        <nav className="navegacion-principal contenedor">
        <li><Link className={isActive("/") ? 'activo' : ''} href="/">Home</Link></li>
        <li><Link className={isActive("/nosotros") ? 'activo' : ''} href="/nosotros">Sobre mí</Link></li>
        <li><Link className={isActive("/clientes") ? 'activo' : ''} href="/clientes">Clientes</Link></li>
        <li><Link className={isActive("/contacto") ? 'activo' : ''} href="/contacto">Contacto</Link></li>

    </nav>
    </div>


    )
}