import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import CardLink from "components/generic/CardLink";

import operations from "resources/operations";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "5%",
    marginBottom: "5%",
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
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
    </div>
  );
};

export default HomePage;
