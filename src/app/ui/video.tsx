"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Video } from "../ui/videoHome";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
console.log(pathname)
  return (
    <main className={clsx("", { "none": pathname != "/" })}>tonto sistema deja a mi padre enpaz i pon la pantalla en su sitio
      <Video />
      {children}
    </main>
  );
}
