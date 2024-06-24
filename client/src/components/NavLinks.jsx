import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import Links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const { toggleSidebar, user } = useDashboardContext();
  const { role } = user; 
  return (
    <div className="nav-links">
      {Links.map((link) => {
        const { text, path, icon } = link; 
        if (role !== "admin" && path === "admin") return null;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
