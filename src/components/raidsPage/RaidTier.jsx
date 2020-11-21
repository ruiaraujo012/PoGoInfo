import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, CardHeader, Grid } from "@material-ui/core";

import PokemonCard from "components/common/PokemonCard";

import { selectRaidTierImage } from "utils/raid";

const useStyles = makeStyles((theme) => ({
  marginAround: {
    margin: "0px",
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  cards: {
    flexGrow: 1,
    backgroundColor: "#e3f2fd",
    margin: theme.spacing(2),
  },
}));

const RaidTier = (props) => {
  const classes = useStyles();

  const { pokemons, tier } = props;

  if (pokemons.length === 0) return <></>;

  return (
    <Card className={classes.cards} variant="outlined">
      <CardHeader
        avatar={
          <Avatar
            variant="rounded"
            src={selectRaidTierImage(tier)}
            className={classes.avatarLarge}
          />
        }
        titleTypographyProps={{ variant: "h4" }}
        title={tier === "mega" ? "Mega Raid" : `Raid Tier ${tier}`}
      />
      <Grid
        item
        container
        xs={12}
        className={classes.marginAround}
        justify="center"
        spacing={3}
      >
        {pokemons &&
          pokemons.map((pokemon, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <PokemonCard pokemon={pokemon} key={i} />
            </Grid>
          ))}
      </Grid>
    </Card>
  );
};

RaidTier.propTypes = {
  pokemons: PropTypes.array,
  tier: PropTypes.string,
};

export default RaidTier;
