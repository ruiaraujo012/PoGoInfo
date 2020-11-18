import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "50%",
  },
  noUnderline: {
    textDecoration: "none",
  },
}));

const CardLink = (props) => {
  const classes = useStyles();

  const { operation } = props;

  return (
    <Link to={operation.path} className={classes.noUnderline}>
      <Card className={classes.root} elevation={4}>
        <CardMedia
          className={classes.cover}
          image={operation.image}
          title={operation.title}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {operation.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {operation.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

CardLink.propTypes = {
  operation: PropTypes.object,
};

export default CardLink;
