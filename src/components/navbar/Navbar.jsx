import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  // Button,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: "Bold",
  },
  buttonLink: {
    fontWeight: "Bold",
  },
  aLink: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "Bold",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title} color="inherit">
            <a href="/" className={classes.aLink}>
              PoGoInfo
            </a>
          </Typography>
          {/* <Button href="/raids" color="inherit" className={classes.buttonLink}>
            Raids
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
