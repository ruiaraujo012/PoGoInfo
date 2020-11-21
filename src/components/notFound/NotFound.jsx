import React from "react";
import { Button, Grid } from "@material-ui/core";
import NotFoundImage from "assets/images/404image.jpg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContent: {
    marginTop: "5%",
    marginBottom: "5%",
    textAlign: "center",
  },
  imageFormat: {
    borderRadius: "20px",
  },
  button: {
    marginTop: "3%",
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContent}>
      <Grid item>
        <img
          src={NotFoundImage}
          alt="Not found"
          width="90%"
          className={classes.imageFormat}
        />
      </Grid>

      <Grid item xs={12} className={classes.button}>
        <Button variant="outlined" color="primary" href="/">
          Go back
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
