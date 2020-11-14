import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const NavBar: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" >
            Signup Form
          </Typography>
          
        </Toolbar>
      </AppBar>
    </>
  );
};
