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
  Chip,
  Paper,
} from "@material-ui/core";
import { fillStringStart } from "utils/utils";
import { generateImageURL } from "utils/pokemon";
import ShinyImage from "assets/images/shiny.png";
import TypeChip from "components/common/TypeChip";
import weather from "assets/files/weather";

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
  avatarShiny: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  avatarBoost: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.1),
  },
  bold: {
    fontWeight: "bold",
  },
  divider: {
    margin: theme.spacing(0.5),
  },
  card: {
    background: "linear-gradient(to bottom, #83a4d4, #b6fbff)",
  },
}));

const PokemonCard = (props) => {
  const classes = useStyles();

  const { pokemon } = props;

  const pokemonID = fillStringStart(pokemon.id, 3, "0");
  const imageURL = generateImageURL(
    pokemonID,
    pokemon.form,
    false,
    pokemon.tier === "mega"
  );

  let pokemonForm = pokemon.form;
  if (pokemon.tier === "mega" && pokemon.form !== "Normal")
    pokemonForm = `Mega ${pokemon.form}`;
  else if (pokemon.tier === "mega") pokemonForm = "Mega";

  return (
    <Card elevation={3} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <Typography variant="caption">#{pokemonID}</Typography>
          </Avatar>
        }
        action={
          pokemon.possible_shiny && (
            <Avatar
              variant="rounded"
              src={ShinyImage}
              className={classes.avatarShiny}
            />
          )
        }
        title={pokemon.name}
        subheader={pokemonForm}
      />
      <div className={classes.media}>
        <img src={imageURL} className={classes.image} />
      </div>
      <CardContent>
        <Paper className={classes.paper} variant="outlined">
          {CPRange(pokemon, classes)}
          <Divider className={classes.divider} />
          {PokemonType(pokemon.type, classes)}
          <Divider className={classes.divider} />
          {BoostedWeather(pokemon.boosted_weather, classes)}
        </Paper>
      </CardContent>
    </Card>
  );
};

const BoostedWeather = (boosts, classes) => {
  return (
    <Grid container justify="space-evenly" alignItems="center">
      <Grid item>
        <Typography variant="subtitle2" className={classes.bold}>
          Boosted by
        </Typography>
      </Grid>

      {boosts.map((boost, i) => (
        <Grid item key={i}>
          <Avatar
            variant="rounded"
            src={weather[boost].image}
            className={classes.avatarBoost}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const PokemonType = (types, classes) => {
  return (
    <Grid container justify="space-evenly" alignItems="center">
      <Grid item>
        <Typography variant="subtitle2" className={classes.bold}>
          Type
        </Typography>
      </Grid>

      {types.map((type, i) => (
        <Grid item key={i}>
          <TypeChip type={type} />
        </Grid>
      ))}
    </Grid>
  );
};

// If needed, in other components, convert in react component and put on common folder.
const CPRange = (pokemon, classes) => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={6}
      >
        <Grid item>
          <Typography variant="subtitle2" className={classes.bold}>
            CP
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            style={{ backgroundColor: "#ffcdd2" }}
            size="small"
            label={pokemon.min_unboosted_cp}
            className={classes.chip}
          />
          <Chip
            style={{ backgroundColor: "#c8e6c9" }}
            size="small"
            label={pokemon.max_unboosted_cp}
            className={classes.chip}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={6}
      >
        <Grid item>
          <Typography variant="subtitle2" className={classes.bold}>
            Boosted CP
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            style={{ backgroundColor: "#ffcdd2" }}
            size="small"
            label={pokemon.min_boosted_cp}
            className={classes.chip}
          />
          <Chip
            style={{ backgroundColor: "#c8e6c9" }}
            size="small"
            label={pokemon.max_boosted_cp}
            className={classes.chip}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
