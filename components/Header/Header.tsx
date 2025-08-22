import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import classes from "./Header.module.css";
import { JSX } from "react";

const MainHeader = ():JSX.Element => {
  return (
    <div className={classes["header-wrap"]}>
      <header className={classes.header}>
        <HeaderTop />
        <HeaderBottom />
      </header>
    </div>
  );
}

export default MainHeader;
