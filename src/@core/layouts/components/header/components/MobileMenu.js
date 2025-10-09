"use client";

import * as React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event, id) => {
    event.preventDefault()
    if (id) router.push(id);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="about-button"
        size="large"
        aria-controls={open ? "about-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="about-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={e => handleClose(e)}
        slotProps={{
          list: {
            "aria-labelledby": "about-button",
          },
          paper: {
            sx: {
              width: 'calc(100vw - 36px)'
            }
          }
        }}
      >
        <MenuItem onClick={(e) => handleClose(e, "/about")}>About</MenuItem>
        <MenuItem onClick={(e) => handleClose(e, "/grow")}>Grow</MenuItem>
        <MenuItem onClick={(e) => handleClose(e, "/visit")}>Visit</MenuItem>
        <MenuItem onClick={(e) => handleClose(e, "/events")}>Events</MenuItem>
        <MenuItem onClick={(e) => handleClose(e, "/give")}>Give</MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;
