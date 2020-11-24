import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Grid,
  Paper,
} from "@material-ui/core";
import { fillStringStart } from "utils/utils";
import { generateImageURL, foundOnImages } from "utils/pokemon";

const useStyles = makeStyles((theme) => ({
  media: {
    textAlign: "center",
  },
  image: {
    width: "35%",
  },
  avatar: {
    color: theme.palette.getContrastText("#eeeeee"),
    background: "#eeeeee",
  },
  alolaShiny: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  paper: {
    textAlign: "center",
    borderRadius: 15,
    padding: theme.spacing(0.5),
  },
  bold: {
    fontWeight: "bold",
  },
  divider: {
    margin: theme.spacing(0.5),
  },
  card: {
    borderRadius: 15,
    background: "linear-gradient(to bottom, #83a4d4, #b6fbff)",
  },
}));

const PokemonCard = ({ pokemon }) => {
  const classes = useStyles();

  const pokemonID = fillStringStart(pokemon.id, 3, "0");
  const shinyURL = generateImageURL(pokemonID, "", true);
  let shinyAlolaURL = null;
  if (pokemon.alolan_shiny)
    shinyAlolaURL = generateImageURL(pokemonID, "Alola", true);

  let foundNames = Object.keys(pokemon).filter(
    (key) => key.includes("found") && pokemon[key] === true
  );

  foundNames = foundNames.map((name) => name.split("_")[1]);

  const foundOn = foundOnImages(foundNames);

  return (
    <Card elevation={3} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <Typography variant="caption">#{pokemonID}</Typography>
          </Avatar>
        }
        action={
          pokemon.alolan_shiny && (
            <Avatar
              variant="rounded"
              src={shinyAlolaURL}
              className={classes.alolaShiny}
            />
          )
        }
        title={pokemon.name}
      />
      <div className={classes.media}>
        <img src={shinyURL} className={classes.image} />
      </div>
      <CardContent>
        <Paper className={classes.paper} variant="outlined">
          <Typography variant="subtitle2" className={classes.bold}>
            Found on
          </Typography>
          <Divider className={classes.divider} />
          <Grid container alignItems="center" justify="space-evenly">
            {foundOn.map((image, i) => (
              <Grid item xs={2} key={i}>
                <Avatar variant="rounded" src={image} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </CardContent>
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
