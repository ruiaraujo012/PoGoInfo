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
    borderRadius: 15,
    textAlign: "center",
    background: "linear-gradient(to bottom, #e0eafc, #cfdef3)",
    margin: theme.spacing(2),
  },
  subPaper: {
    borderRadius: 15,
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
            <Paper variant="outlined" className={classes.subPaper}>
              <Typography variant="h4">PoGoInfo</Typography>
              <Paper variant="outlined" className={classes.subPaper}>
                <Typography variant="body1">
                  PoGoInfo is a website made to help Pokemon Go players around
                  the world in their adventure.
                </Typography>
              </Paper>
            </Paper>
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
                ©2020 PoGoInfo | All rights reserved by their respective owners.
                {/* | @TheSilphRoad | /r/TheSilphRoad */}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.subPaper}>
              <Typography variant="caption">
                Pokémon and its trademarks are ©1995-2020 Nintendo, Creatures,
                and GAMEFREAK.
              </Typography>
              <br />
              <Typography variant="caption">
                All images and names owned and trademarked by Nintendo, Niantic,
                The Pokémon Company, and GAMEFREAK are property of their
                respective owners.
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.subPaper}>
              <Typography variant="caption">
                The PoGoInfo website is not officially affiliated with Pokémon
                GO and is intended to fall under Fair Use doctrine, similar to
                any other informational site such as a wiki.
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
