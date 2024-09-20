import SideNavigation from "@/app/_components/SideNavigation";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export default function AccountLayout({ children }) {
  return (
    <div className="flex">
      <SideNavigation />
      <div className=" mx-auto ">{children}</div>
    </div>
  );
}
