import React, { useEffect, useState } from "react";
import pogoapi from "api/pogoapi";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PokemonCard from "components/shinyDex/PokemonCard";
import { Pagination } from "@material-ui/lab";

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
  pagination: {
    marginBottom: theme.spacing(2),
  },
}));

const ShinyDex = () => {
  const classes = useStyles();

  // Change to state if needed (dynamic number)
  const POKEMONS_PER_PAGE = 20;

  const [shinyDex, setShinyDex] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Functions and methods
  const fetchShinyDex = async () => {
    try {
      const { data } = await pogoapi.get("/shiny_pokemon.json");
      let test = Object.values(data);
      setShinyDex(test);
    } catch (err) {
      // TODO: Add toast notification
      console.log("err :>> ", err);
    }
  };

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Effect
  useEffect(() => {
    fetchShinyDex();
    setLoading(false);
  }, []);

  // Get current pokemons
  const indexOfLastPokemon = currentPage * POKEMONS_PER_PAGE;
  const indexOfFirstPokemon = indexOfLastPokemon - POKEMONS_PER_PAGE;
  const currentShinyDex = shinyDex.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const totalPages = Math.ceil(shinyDex.length / POKEMONS_PER_PAGE);

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
              currentShinyDex.map((pokemon, i) => (
                <Grid item xs={12} sm={4} md={3} lg={4} key={i}>
                  <PokemonCard pokemon={pokemon} key={i} />
                </Grid>
              ))}
          </Grid>
        </Paper>

        <Grid
          item
          container
          xs={12}
          lg={8}
          justify="center"
          className={classes.pagination}
        >
          <Grid item>
            <Pagination
              count={totalPages}
              color="primary"
              showFirstButton
              showLastButton
              siblingCount={0}
              onChange={handleChangePage}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default ShinyDex;
