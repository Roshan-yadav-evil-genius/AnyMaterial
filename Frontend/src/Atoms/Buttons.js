import React from "react";
import "./Buttons.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Button = ({ size, variant,className, shape,fluid, children, ...rest }) => {
  const classes = classNames("cbtn",className, {
    [`cbtn-${size}`]: size,
    [`cbtn-${variant}`]: variant,
    [`cbtn-${shape}`]: shape,
    [`cbtn-fluid-${fluid}`]: fluid,
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
    "light"
  ]),
  fluid: PropTypes.oneOf(["","h", "v","hv"]),
  shape: PropTypes.oneOf(["rounded-rectangular", "rectangular", "circle"]),
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  size: "md",
  variant: "primary",
  shape: "rounded-rectangular",
  fluid: "",
};


export const LinkButton = ({size,className,children,...rest}) => {
  const classes = classNames("cbtn-link",className, {
    [`cbtn-${size}`]: size,
  });
  return (
    <button className={classes} {...rest}>{children}</button>
  )
}
