import { Link } from "react-scroll";
import React, { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import "./navbar.css";

export default function Navbar() {
  // drawer state & function
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Links list
  const DrawerList = (
    <>
      <Link
        className="desktopMenuItem"
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
      >
        Home
      </Link>
      <Link
        className="desktopMenuItem"
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
      >
        About
      </Link>
      <Link
        className="desktopMenuItem"
        to="portfolio"
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
      >
        Portfolio
      </Link>
      <Link
        className="desktopMenuItem"
        to="contacts"
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
      >
        Contacts
      </Link>
    </>
  );

  return (
    <nav className="navbar">
      <div className="navLogo">
        <img
          className="logo"
          src="../../../public/20250907_0914_L & M Web Development_simple_compose_01k4hcyjthf04vjep5z79hgw3q.png"
          alt="logo"
        />
        <FormatListBulletedIcon
          className="menuIcon"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            color: "#F9F3EF",
            cursor: "pointer",
            fontSize: "3rem",
          }}
        />
      </div>

      <div className="subNav">
        <div className="desktopMenuList">{DrawerList}</div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contacts")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Me
        </button>
      </div>
      <Box>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
          }}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "#27496d",
                color: "#F9F3EF",
                gap: "1rem",
                padding: "1rem",
              },
            },
          }}
        >
          {DrawerList}
        </Drawer>
      </Box>
    </nav>
  );
}
