"use client";

import { Icons } from "@/components/icons/icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/", icon: Icons.home },
  { name: "Roadmap", href: "/roadmap", icon: Icons.roadmap },
  { name: "Post", href: "/post", icon: Icons.post },
  { name: "Feedback", href: "/feedback", icon: Icons.reply },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="backdrop-blur-lg space-y-2 pl-4 pr-2 md:relative">
      {links.map((link) => {
        const LinkIcon = link.icon;
        
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              "hover:bg-[rgba(255,255,255,.1)] transition ease-linear hover:rounded-md h-17 w-17 aspect-square flex flex-col items-center justify-center px-2",
              {
                "bg-blue-400 hover:bg-blue-400 rounded-md": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="h-8 w-8" />
            <span className="text-xs font-semibold">{link.name}</span>
          </a>
        );
      })}
    </div>
  );
}
