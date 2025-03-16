'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
    HomeIcon,
    ScaleIcon,
    NewspaperIcon,
    InformationCircleIcon,
    PhoneIcon,
  } from '@heroicons/react/24/outline';
const links = [
    { name: 'Inicio', href: '/', icon: HomeIcon },
    { name: 'Servicios', href: '/servicios', icon:ScaleIcon},
    { name: 'Notícias', href: '/noticias', icon:NewspaperIcon},
    { name: 'Empresas y Pimes', href: '/empresas', icon: InformationCircleIcon},
    { name: 'Contacto', href: '/contacto', icon: PhoneIcon},
]

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {

                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-opacity-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            }
                        )}
                    >
                        {LinkIcon && <LinkIcon className="h-5 w-5" />}
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}