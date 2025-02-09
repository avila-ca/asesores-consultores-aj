"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Video } from "./videoHome";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      <main >
        <div className={clsx( { "hidden" : pathname !== "/" },)}>
          <Video />

        </div>
        {children}
      </main>

    </>
  );
}
