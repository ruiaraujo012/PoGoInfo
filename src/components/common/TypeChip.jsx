import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";
import types from "assets/files/types";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.1),
  },
  text: {
    color: "white",
  },
}));

// Add avatar if needed in the future
const TypeChip = (props) => {
  const classes = useStyles();

  const { type, variant, size } = props;

  return (
    <Chip
      label={
        <Typography variant="body2" className={classes.text}>
          {type}
        </Typography>
      }
      style={{ backgroundColor: `${types[type].color}` }}
      variant={variant}
      size={size || "small"}
      className={classes.chip}
    />
  );
};

TypeChip.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default TypeChip;
