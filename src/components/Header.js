import React from "react";
import Style from "./Header.module.css";

function Header(props) {
  console.log(props);
  return (
    <div className={Style.navbar}>
      <div className={Style.appName}>Habit Track</div>
      {/* getting title of the page from props */}
      <div className={Style.pageTitle}>{props.props.substring(1)}</div>
      <div>
        <button className={Style.actbtn} onClick={props.action}>
          {props.actName}
        </button>
      </div>
    </div>
  );
}

export default Header;
