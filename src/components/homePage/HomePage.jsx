import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import CardLink from "components/generic/CardLink";

import operations from "resources/operations";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
    marginBottom: "5%",
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item md={2} />
      <Grid item container alignContent="center" spacing={3} xs={12} sm={8}>
        {operations.map((op, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CardLink operation={op} />
          </Grid>
        ))}
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};

export default HomePage;
