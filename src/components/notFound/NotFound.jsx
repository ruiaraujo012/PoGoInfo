import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import NotFoundImage from "assets/images/404image.jpg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: theme.spacing(2),
  },
  imageFormat: {
    borderRadius: 15,
    maxWidth: "90vw",
    maxHeight: "70vh",
  },
  centerContainer: {
    textAlign: "center",
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContent}
      alignItems="center"
      justify="center"
      spacing={2}
    >
      <Grid item>
        <Container className={classes.centerContainer}>
          <img
            src={NotFoundImage}
            alt="Not found"
            // width="80%"
            className={classes.imageFormat}
          />
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Button variant="outlined" color="primary" href="/">
          Go back
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
