"use client";
import React from "react";
import Image from "next/image";
import img from "../../Images/Logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="sideBar__container">
      <div className="sideBar__inner">
        <div className="logo_box">
          <Link href={"/"}>
            <Image src={img} alt={"logo"} priority />
          </Link>
        </div>

        <div className="menu__side-bar">
          <ul className="menu__side-bar-list">
            <li
              className={
                "menu__side-bar-list--item " +
                (pathname === "/" ? "active" : "")
              }
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={
                "menu__side-bar-list--item " +
                (pathname === "/Movies" ? "active" : "")
              }
            >
              <Link href={"Movies"}>Movies</Link>
            </li>
            <li className="menu__side-bar-list--item">
              <Link href={"Coming-soon"}>TV Series</Link>
            </li>
            <li className="menu__side-bar-list--item">
              <Link href={"Coming-soon"}>Up coming</Link>
            </li>
          </ul>
        </div>

        <Link href={"Coming-soon"}>Log out</Link>
      </div>
    </div>
  );
};

export default SideBar;
