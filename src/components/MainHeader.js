import React from "react";
import { Badge } from "antd";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";

const MainHeader = () => {
  const { appData } = useSelector((state) => state);

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/collections">
            My Collections
              <Badge count={appData.urls.length}>
                <a href="#" className="head-example" />
              </Badge>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
