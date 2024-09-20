"use client";
import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Spinner from "./Spinner";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathName = usePathname(); // 클라이언트 컴포넌트에서만 사용 가능

  return (
    <nav className="border-r border-primary-900 min-w-56  ">
      <ul className="flex flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`${
                pathName === link.href ? "bg-primary-900 " : ""
              } py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          {/* <SignInButton /> */}
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
