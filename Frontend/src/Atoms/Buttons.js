import React from "react";
import "./Buttons.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Button = ({ size, variant, shape, children, ...rest }) => {
  const classes = classNames("btn", {
    [`btn-${size}`]: size,
    [`btn-${variant}`]: variant,
    [`btn-${shape}`]: shape,
  });

  return (
    <button
      className={classes}
      {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ]),
  shape: PropTypes.oneOf(["rounded-rectangular", "rectangular", "circle"]),
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  size: "md",
  variant: "primary",
  shape: "rounded-rectangular",
};
