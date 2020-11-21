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
    minHeight: 250,
    background: "linear-gradient(0deg, #e3e3e3 0%,#e3e3e3 55%, #828a93 100%)",
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
    flexDirection: "column",
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
        <Typography variant="caption">{contributor.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Container>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            href={contributor.url}
            disabled={!contributor.url}
          >
            Visit
          </Button>
        </Container>
      </CardActions>
    </Card>
  );
};

PokemonCard.propTypes = {
  contributor: PropTypes.object,
};

export default PokemonCard;
