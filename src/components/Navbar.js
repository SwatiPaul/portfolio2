import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
            <div>
              <img src='./logo2.png' alt='logo' className='portfolio_logo' />
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
              }}
              className='navbar'>
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

            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              className='bar_icon'>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Navbar;
