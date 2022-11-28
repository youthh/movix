import React from "react";
import Image from "next/image";
import img from "../Images/Logo.png";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="sideBar__container">
      <div className="sideBar__inner">
        <div className="logo_box">
          <Link href={"/"}>
            <Image src={img} alt={"logo"} priority />
          </Link>
        </div>

        <div className="menu__side-bar">
          <h5 className={"menu__side-bar--title"}>menu</h5>
          <ul className="menu__side-bar-list">
            <li className="menu__side-bar-list--item active">
              <Link href={"Browse"}>Browse</Link>
            </li>
            <li className="menu__side-bar-list--item">
              <Link href={"about"}>Watchlist</Link>
            </li>
            <li className="menu__side-bar-list--item">
              <Link href={"Coming-soon"}>Coming soon</Link>
            </li>
          </ul>
        </div>
        <div className="menu__side-bar">
          <h5 className={"menu__side-bar--title"}>Social</h5>
          <ul className="menu__side-bar-list">
            <li className="menu__side-bar-list--item">
              <Link href={"Browse"}>Browse</Link>
            </li>
            <li className="menu__side-bar-list--item">
              <Link href={"Watchlist"}>Watchlist</Link>
            </li>
          </ul>
        </div>
        <div className="menu__side-bar">
          <h5 className={"menu__side-bar--title"}>site</h5>
          <ul className="menu__side-bar-list">
            <li className="menu__side-bar-list--item">
              <Link href={"Browse"}>Settings</Link>
            </li>
            <li className="menu__side-bar-list--item">
              <Link href={"Watchlist"}>Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
