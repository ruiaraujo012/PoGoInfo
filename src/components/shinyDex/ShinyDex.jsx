import React, { useEffect, useState } from "react";
import pogoapi from "api/pogoapi";
import { Grid, IconButton, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PokemonCard from "components/shinyDex/PokemonCard";
import { Alert, Pagination } from "@material-ui/lab";
import { Clear, Search } from "@material-ui/icons";
import Fuse from "fuse.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
  paper: {
    flexGrow: 1,
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
  search: {
    marginTop: theme.spacing(2),
  },
  alert: {
    margin: theme.spacing(2),
  },
  icons: {
    marginRight: 0.1,
  },
}));

const ShinyDex = () => {
  const classes = useStyles();

  // Change to state if needed (dynamic number)
  const POKEMONS_PER_PAGE = 12;

  const [shinyDex, setShinyDex] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [parsedShinyDex, setParsedShinyDex] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  /**
   * Functions and methods
   */
  const fetchShinyDex = async () => {
    try {
      const { data } = await pogoapi.get("/shiny_pokemon.json");
      return Object.values(data);
    } catch (err) {
      // TODO: Add toast notification
      console.log("err :>> ", err);
    }
  };

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickClear = () => {
    setSearchInput("");
    setParsedShinyDex(shinyDex);
    setTotalPages(Math.ceil(shinyDex.length / POKEMONS_PER_PAGE));
  };

  const handleChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    if (searchInput !== "") {
      let fuseResult = fuse.search(searchInput);
      fuseResult = fuseResult.map((el) => el.item);
      setParsedShinyDex(fuseResult);
      setTotalPages(Math.ceil(fuseResult.length / POKEMONS_PER_PAGE));
    } else {
      setParsedShinyDex(shinyDex);
      setTotalPages(Math.ceil(shinyDex.length / POKEMONS_PER_PAGE));
    }

    setCurrentPage(1);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleClickSearchButton = () => {
    handleSearch();
  };

  /**
   * Effect
   */
  useEffect(async () => {
    const data = await fetchShinyDex();
    setShinyDex(data);
    setParsedShinyDex(data);

    const pages = Math.ceil(data.length / POKEMONS_PER_PAGE);
    setTotalPages(pages);

    setLoading(false);
  }, []);

  // Auto search
  useEffect(() => {
    if (searchInput === "") return handleSearch();
    const timeoutId = setTimeout(() => handleSearch(), 350);
    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  /**
   * Search Input
   */
  const fuse = new Fuse(shinyDex, {
    threshold: 0.4,
    keys: ["name"],
  });

  /**
   * Calculate pagination
   * Should this be a state???
   * And moved to useEffects (componentDidUpdate)
   */
  const indexOfLastPokemon = currentPage * POKEMONS_PER_PAGE;
  const indexOfFirstPokemon = indexOfLastPokemon - POKEMONS_PER_PAGE;
  const currentShinyDex = parsedShinyDex.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item lg={2} />
      <Grid item container alignItems="center" xs={12} lg={8} spacing={3}>
        <Grid
          item
          container
          xs={12}
          lg={8}
          justify="center"
          className={classes.search}
        >
          <Grid item xs={10} sm={6}>
            <TextField
              id="search"
              label="Search for pokémon name"
              placeholder="Bulbasaur"
              variant="filled"
              type="text"
              fullWidth
              value={searchInput}
              onChange={handleChangeSearchInput}
              onKeyPress={handleKeyPress}
              InputProps={{
                endAdornment: (
                  <>
                    <IconButton
                      edge="end"
                      onClick={handleClickClear}
                      className={classes.icons}
                    >
                      <Clear />
                    </IconButton>

                    <IconButton
                      color="primary"
                      onClick={handleClickSearchButton}
                    >
                      <Search />
                    </IconButton>
                  </>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Paper variant="outlined" className={classes.paper}>
          <Grid
            item
            container
            xs={12}
            className={classes.marginAround}
            justify="center"
            spacing={3}
          >
            {currentShinyDex.length === 0 ? (
              <Alert
                variant="filled"
                severity="warning"
                className={classes.alert}
              >
                No pokémon found with name &quot;<b>{searchInput}</b>&quot;.
              </Alert>
            ) : (
              !loading &&
              currentShinyDex.map((pokemon, i) => (
                <Grid item xs={12} sm={4} md={3} lg={4} key={i}>
                  <PokemonCard pokemon={pokemon} key={i} />
                </Grid>
              ))
            )}
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
              page={currentPage}
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
