"use client";
import React from "react";
import Image from "next/image";
import notification from "../../Images/notification.png";
import profilePic from "../../Images/profilePic.png";

import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Checkbox } from "antd";
const SideBarProfile = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="sideBarProfile__container">
      <div className="choice__box">
        <div className="name__choice__box">
          <h4 className="title__choice__box">Categories</h4>
          <p className="uncheckAll">Uncheck All</p>
        </div>
        <div className="choice__box--categories">
          <ul>
            <li className="choice__box--categories-item">
              <h6 className="choice__box_categories-item">Action</h6>
              <Checkbox onChange={onChange} defaultChecked={true} />
            </li>
            <li className="choice__box--categories-item">
              <h6 className="choice__box_categories-item">Adventure</h6>
              <Checkbox onChange={onChange} defaultChecked={true} />
            </li>
            <li className="choice__box--categories-item">
              <h6 className="choice__box_categories-item">Animated</h6>
              <Checkbox onChange={onChange} defaultChecked={true} />
            </li>
            <li className="choice__box--categories-item">
              <h6 className="choice__box_categories-item">Comedy</h6>
              <Checkbox onChange={onChange} defaultChecked={true} />
            </li>
            <li className="choice__box--categories-item">
              <h6 className="choice__box_categories-item">Crime</h6>
              <Checkbox onChange={onChange} defaultChecked={true} />
            </li>
            <li className="choice__box--categories-item">
              <h6 className="choice__box_categories-item">Fantasy</h6>
              <Checkbox onChange={onChange} defaultChecked={true} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarProfile;
