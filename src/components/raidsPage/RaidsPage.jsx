import React, { useEffect, useState } from "react";
import pogoapi from "config/pogoapi";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import RaidTier from "components/raidsPage/RaidTier";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
    marginBottom: "5%",
  },
});

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
      const { data } = await pogoapi.get("/api/v1/raid_bosses.json");
      setCurrentRaids(data.current);
    } catch (err) {
      console.log("err :>> ", err);
    }
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item md={2} />
      <Grid item container alignContent="center" xs={12} sm={8} spacing={3}>
        {!loadingCurrentRaids &&
          Object.keys(currentRaids).map((pokemonByTier, i) => (
            <RaidTier pokemons={currentRaids[pokemonByTier]} key={i} />
          ))}
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};

export default RaidsPage;
