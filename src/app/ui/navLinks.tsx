import { usePathname } from "next/navigation";
import * as React from 'react';
import Link from "next/link";
import clsx from "clsx";
declare const HomeIcon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;


const links = [
    {name: 'Home', href:'/inicio', icon: HomeIcon},
    {name: 'Services', href:'/servicios', },
    {name: 'News', href:'/noticias', },
    {name: 'About', href:'/sobre-nosotros', },
    {name: 'Contact', href:'/contacto', },
]

export default function NavLinks() {
    const pathname = usePathname();

    return(
        <>
            {links.map((link)=>{

                const LinkIcon = link.icon;
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                        className={ clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            }
                        )}
                        >
                            <LinkIcon />
                            <p className="hidden md:block">{ link.name }</p>
                        </Link>
                )            
            })}
        </>
    )
}