import * as React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LandscapeIcon from "@mui/icons-material/Landscape";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation().pathname;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getMenuStatus = () => {
    if (
      pathname === "/portfolio" ||
      pathname === "/portfolio/user-fiendly-cross-domain-ui" ||
      pathname === "/portfolio/material-ui" ||
      pathname === "/portfolio/accessibility-in-gov-uk" ||
      pathname === "/portfolio/user-testing-waitrose" ||
      pathname === "/portfolio/tailwindcss-insights" ||
      pathname === "/portfolio/imported-files-ui"
    ) {
      return "2px solid #fff";
    }
    return false;
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 2,
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "80px",
          }}
          alt="Mountain"
          src="/images/mountain.jpeg"
        />
        <Box component="h1" sx={{ mt: 0 }}>
          {/* @ts-ignore:next-line */}
          <Typography component="span" variant="h4">
            Paul Brownsmith -{" "}
          </Typography>
          {/* @ts-ignore:next-line */}
          <Typography
            component="span"
            variant="h4"
            sx={{ color: "text.secondary" }}
          >
            UI/UX Engineer
          </Typography>
        </Box>
      </Box>
      <AppBar position="static" sx={{ backgroundColor: "#666" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LandscapeIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem>
                  <Button
                    component={Link}
                    to={"/"}
                    sx={{ my: 0, display: "block", width: "200px" }}
                  >
                    Home
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    component={Link}
                    to={"/portfolio"}
                    sx={{
                      my: 0,
                      display: "block",
                      width: "200px",
                    }}
                  >
                    Portfolio
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    component={Link}
                    to={"/resume"}
                    sx={{ my: 0, display: "block", width: "200px" }}
                  >
                    Resume
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
            <LandscapeIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                component={Link}
                to={"/"}
                sx={{
                  textAlign: "center",
                  m: 0,
                  color: "white",
                  display: "block",
                  borderRadius: 0,
                  borderBottom: pathname === "/" ? "2px solid #fff" : "0",
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to={"/portfolio"}
                // @ts-ignore:next-line
                sx={{
                  textAlign: "center",
                  m: 0,
                  color: "white",
                  display: "block",
                  borderRadius: 0,
                  borderBottom: getMenuStatus(),
                }}
              >
                Portfolio
              </Button>
              <Button
                component={Link}
                to={"/resume"}
                sx={{
                  textAlign: "center",
                  m: 0,
                  color: "white",
                  display: "block",
                  borderRadius: 0,
                  borderBottom: pathname === "/resume" ? "2px solid #fff" : "0",
                }}
              >
                Resume
              </Button>
              <Button
                component={Link}
                to={"/about"}
                sx={{
                  textAlign: "center",
                  m: 0,
                  color: "white",
                  display: "block",
                  borderRadius: 0,
                  borderBottom: pathname === "/about" ? "2px solid #fff" : "0",
                }}
              >
                About Me
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Avatar alt="Paul Brownsmith" src="/images/paul.jpg" />
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={false}
              >
                <MenuItem onClick={() => {}}>
                  {/* @ts-ignore:next-line */}
                  <Typography sx={{ textAlign: "center" }}>setting</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
