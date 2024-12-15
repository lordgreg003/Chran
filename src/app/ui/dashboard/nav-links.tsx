"use client";
import {
  UserGroupIcon,
  PlusIcon as CreateIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
const links = [
  { name: "Create Post", href: "/admin", icon: CreateIcon },
  { name: "Create Article", href: "/create", icon: CreateIcon },
  { name: "All Post", href: "/all", icon: UserGroupIcon },
  { name: "All Article", href: "/allarticle", icon: UserGroupIcon },
 
];

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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 dark:bg-[#1E1E1E]",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
