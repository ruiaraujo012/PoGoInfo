import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";
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
      <Grid item lg={2} />
      <Grid item container direction="column" xs={12} lg={8}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid item>
            <Typography variant="h4">PoGoInfo</Typography>
            <Typography variant="body1">
              PoGoInfo is an website, not afiliated to any{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.subPaper}>
              <Typography variant="h6">
                The different icons, sprites, wallpapers and information used in
                this website are taken from different free sources, listed
                below:
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
          <Grid item>
            <Divider variant="middle" />
            <Paper variant="outlined" className={classes.subPaper}>
              <Typography variant="inherit">
                ©2020 PoGoInfo | All Rights Reserved
                {/* | @TheSilphRoad | /r/TheSilphRoad */}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.subPaper}>
              <Typography variant="caption">
                Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company
                2001-2018. All images and names owned and trademarked by
                Gamefreak, Nintendo, The Pokémon Company, and Niantic are
                property of their respective owners.
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.subPaper}>
              <Typography variant="caption">
                The PoGoInfo is not affiliated with Niantic Inc., The Pokemon
                Company, or Nintendo.
              </Typography>
            </Paper>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};
export default AboutUs;
