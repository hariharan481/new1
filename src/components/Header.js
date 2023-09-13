import React from "react";
import "../styles/Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Year } from "./Year";
import Search1 from "./Search1";

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          className="navbar"
          position="static"
          sx={{
            height: "80px",
          }}
        >
          <Toolbar variant="dense">
            <img
              className="logo"
              src="https://static.wixstatic.com/media/7607b5_dbdbad3954b74cd0b66694c3302204e0~mv2.png/v1/fill/w_275,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EMEDLOGIX_Final-01.png"
            ></img>
          </Toolbar>
        </AppBar>
      </Box>
      <Year />

      <Search1 />
    </>
  );
};