import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Stack, Tooltip } from "@mui/material";
import { auth } from "../firebase‐config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { auth } from "../firebase‐config";
// import { useContext } from "react";
// import { AuthContext } from "../context/MyContext";
// import { useState } from 'react';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ["Home", "Events", "Competitions", "Blogs"];
const settings = ["Profile", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // const [currentUser, setCurrentUser] = useState(auth?.currentUser);
  // const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  // const user = auth.currentUser;
  // if({currentUser}){
  //   setProfileAvatar(false);
  // }else{
  //   setProfileAvatar(true);
  // }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogOut = () => {
    signOut(auth);
    // setUser(auth.currentUser);
    // console.log(auth);
    alert("Logged Out!");
    navigate("/");
  };

  console.log(currentUser);

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static" style={{ backgroundColor: "#D1AA5F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 65,
                display: { xs: "none", md: "flex" },
              }}
              alt="Your logo."
              src={logo}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NasCon
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: "white",
                  display: "block",
                  fontWeight: 700,
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
          {currentUser === null ? (
            <Stack direction="row" spacing={1}>
              <Button color="secondary" variant="contained" size="small">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Login"
                >
                  Login
                </Link>
              </Button>
              <Button color="secondary" variant="outlined" size="small">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/Signup"
                >
                  Sign up
                </Link>
              </Button>
            </Stack>
          ) : (
            ""
          )}
          {currentUser !== null ? (
            <Stack direction="row" spacing={1}>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                onClick={handleLogOut}
              >
                LogOut
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                // onClick={handleLogOut}
              >
                Profile
              </Button>
            </Stack>
          ) : (
            ""
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
