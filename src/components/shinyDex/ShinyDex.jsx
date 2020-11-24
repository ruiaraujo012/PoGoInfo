import React, { useEffect, useState } from "react";
import pogoapi from "api/pogoapi";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PokemonCard from "components/shinyDex/PokemonCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
  paper: {
    borderRadius: 15,
    background: "linear-gradient(to bottom, #e0eafc, #cfdef3)",
    margin: theme.spacing(2),
  },
  marginAround: {
    margin: "0px",
  },
}));

const ShinyDex = () => {
  const classes = useStyles();

  const [shinyDex, setShinyDex] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShinyDex();
    setLoading(false);
  }, []);

  const fetchShinyDex = async () => {
    try {
      const { data } = await pogoapi.get("/shiny_pokemon.json");
      setShinyDex(data);
    } catch (err) {
      // TODO: Add toast notification
      console.log("err :>> ", err);
    }
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item lg={2} />
      <Grid item container alignItems="center" xs={12} lg={8} spacing={3}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid
            item
            container
            xs={12}
            className={classes.marginAround}
            justify="center"
            spacing={3}
          >
            {!loading &&
              Object.keys(shinyDex).map((key, i) => (
                <Grid item xs={12} sm={4} md={3} lg={4} key={i}>
                  <PokemonCard pokemon={shinyDex[key]} key={i} />
                </Grid>
              ))}
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default ShinyDex;
