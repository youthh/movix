import React from "react";
import Image from "next/image";
import notification from "../../Images/notification.png";
import profilePic from "../../Images/profilePic.png";
import SearchField from "./Search";

const Header = () => {
  return (
    <div className={"header_container"}>
      <SearchField />
      <div className="top_sidebar_profile">
        <div className={"notification__box--img"}>
          <Image
            className="img_sidebar__profile-top"
            src={notification}
            alt={"notification"}
          />
        </div>
        <div className="sideBar__profile--box">
          <Image src={profilePic} alt={"avatar"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
