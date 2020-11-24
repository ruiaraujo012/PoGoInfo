import React, { useEffect, useState } from "react";
import pogoapi from "api/pogoapi";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import RaidTier from "components/raidsPage/RaidTier";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
}));

const RaidsPage = () => {
  const classes = useStyles();

  const [currentRaids, setCurrentRaids] = useState({});
  const [loadingCurrentRaids, setLoadingCurrentRaids] = useState(true);

  useEffect(() => {
    fetchRaidsData();
    setLoadingCurrentRaids(false);
  }, []);

  const fetchRaidsData = async () => {
    try {
      const { data } = await pogoapi.get("/raid_bosses.json");
      setCurrentRaids(data.current);
    } catch (err) {
      // TODO: Add toast notification
      console.log("err :>> ", err);
    }
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item lg={2} />
      <Grid item container alignItems="center" xs={12} lg={8} spacing={3}>
        {!loadingCurrentRaids &&
          Object.keys(currentRaids).map((tier, i) => (
            <RaidTier pokemons={currentRaids[tier]} tier={tier} key={i} />
          ))}
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default RaidsPage;
