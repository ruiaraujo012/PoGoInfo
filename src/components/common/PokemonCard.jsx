import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
} from "@material-ui/core";
import { fillStringStart } from "utils/utils";
import { generateImageURL } from "utils/pokemon";

const useStyles = makeStyles((theme) => ({
  media: {
    textAlign: "center",
  },
  avatar: {
    color: theme.palette.getContrastText("#bbdefb"),
    backgroundColor: "#bbdefb",
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
    <Card elevation={8}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <Typography variant="caption">#{pokemonID}</Typography>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={pokemon.name}
        subheader={pokemonForm}
      />
      <div className={classes.media}>
        <img src={imageURL} />
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>Icon</CardActions>
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
