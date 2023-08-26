"use client";

import { translations } from "@/utils/translations";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TeacherNav() {
  const navItems = [
    { path: "/teacher", label: translations.fieldLabels.teacherNavHome},
    {
      path: "/teacher/upcoming-appointments",
      label: translations.upcommingAppointmentsHeading,
    },
    { path: "/teacher/new-appointment", label: translations.fieldLabels.teacherNavNewAppointment },
    {path: "/teacher/new-client", label: translations.fieldLabels.teacherNaveNewClient},
    {path: "/teacher/manage-clients", label: "Manage Clients"}
  ];

  const NavItem = ({ label, path, last }) => {
    const pathname = usePathname();
    const active = pathname == path;
    const linkClasses = {
      true: "font-bold underline decoration-2",
      false: "font-normal",
    };
    return (
      <>
        <span className="text-lg whitespace-nowrap">
          <Link className={linkClasses[active]} href={path}>
            {label}
          </Link>
        </span>
          {last ? null : <span>•</span>}
      </>
    );
  };

  return (
    <div className="flex justify-center w-full bg-light-shades-lighter text-dark-shades- dark:bg-dark-shades-lighter dark:text-light-shades- space-x-1 py-2 px-1 flex-wrap">
        {navItems.map((navItemx, index) => {
          let lastItem = false;
          if (index == navItems.length - 1) {
            lastItem = true;
          }
          return (
            <NavItem
              key={index}
              label={navItemx.label}
              path={navItemx.path}
              last={index == navItems.length - 1}
            />
          );
        })}
    </div>
  );
}


// border-b-[1px] border-b-light-shades-darker dark:border-b-dark-shades-lighter