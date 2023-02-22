import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ConfigFile } from "../service/ConfigFile";

const Navbar = () => {
  const pages = ["HOME", "ABOUT", "PROJECT", "CONTACT ME"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div className='header' id='myHeader'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <div style={{ float: "left" }}>
              <img src='./logo.png' alt='logo' />
            </div>
            {/* <div className='icon_section'>
              <FacebookIcon />
              <LinkedInIcon />
              <WhatsAppIcon />
            </div> */}
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", md: "flex" },
                float: "right",
              }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "cursive",
                  }}>
                  {page}
                </Button>
              ))}
            </Box>
            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
            {/* <Box sx={{ display: "flex" }}>
              <Grid item xs={2}>
                <div className='nav_item'>
                  <h6>Home</h6>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className='nav_item'>
                  <h6>About</h6>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className='nav_item'>
                  <h6>Project</h6>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className='nav_item'>
                  <h6>contact me</h6>
                </div>
              </Grid>
            </Box> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Navbar;
