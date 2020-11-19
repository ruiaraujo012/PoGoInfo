import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, CardHeader, Grid } from "@material-ui/core";

import PokemonCard from "components/common/PokemonCard";
import oneRaid from "assets/images/oneRaid.svg";

const useStyles = makeStyles((theme) => ({
  marginAround: {
    margin: "0px",
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  cards: {
    backgroundColor: "#e3f2fd",
    margin: theme.spacing(2),
  },
}));

const RaidTier = (props) => {
  const classes = useStyles();

  const { pokemons } = props;

  if (pokemons.length === 0) return <></>;

  const tier = pokemons[0].tier;

  return (
    <Card className={classes.cards} variant="outlined">
      <CardHeader
        avatar={
          <Avatar
            variant="rounded"
            src={oneRaid}
            className={classes.avatarLarge}
          />
        }
        titleTypographyProps={{ variant: "h4" }}
        title={`Raid Level ${tier}`}
      ></CardHeader>
      <Grid item container xs={12} className={classes.marginAround} spacing={3}>
        {pokemons &&
          pokemons.map((pokemon, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <PokemonCard pokemon={pokemon} key={i} />
            </Grid>
          ))}
      </Grid>
    </Card>
  );
};

RaidTier.propTypes = {
  pokemons: PropTypes.array,
};

export default RaidTier;
