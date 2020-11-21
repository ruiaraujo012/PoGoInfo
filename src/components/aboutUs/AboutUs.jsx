import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import ContributorCard from "components/aboutUs/ContributorCard";
import contributors from "assets/files/contributors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    background: "linear-gradient(to bottom, #e0eafc, #cfdef3)",
    margin: theme.spacing(2),
  },
  subPaper: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item md={2} />
      <Grid item container direction="column" xs={12} sm={8}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid item>
            <Typography variant="h4">PoGoInfo</Typography>
            <Typography variant="body1">Description</Typography>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.subPaper}>
              <Typography variant="h6">
                The different icons, sprites, wallpapers and information used in
                the website are taken from different free sources, listed below:
              </Typography>
            </Paper>
          </Grid>
          <Grid item container justify="center" alignItems="center">
            {contributors.map((contributor, i) => (
              <Grid item key={i} xs={6} sm={3}>
                <ContributorCard contributor={contributor} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};

export default AboutUs;
