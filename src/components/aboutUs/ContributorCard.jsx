import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Container,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "grid",
    borderRadius: 15,
    minHeight: 250,
    background: "linear-gradient(to bottom, #83a4d4, #b6fbff)",
    paddingTop: theme.spacing(2),
    margin: theme.spacing(2),
  },
  largeAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  centerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const PokemonCard = (props) => {
  const classes = useStyles();

  const { contributor } = props;

  return (
    <Card elevation={3} className={classes.card}>
      <Container className={classes.centerContainer}>
        <Avatar className={classes.largeAvatar} src={contributor.image} />{" "}
      </Container>
      <CardContent>
        <Typography variant="h6">{contributor.name}</Typography>
        <Typography variant="body2">{contributor.description}</Typography>
      </CardContent>
      {contributor.url && (
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            href={contributor.url}
            fullWidth
            target="_blank"
          >
            Visit
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

PokemonCard.propTypes = {
  contributor: PropTypes.object,
};

export default PokemonCard;
