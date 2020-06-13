import React from "react";
import PropTypes from "prop-types";

function PaintWeather({ temp, name }) {
  return (
    <>
      <span className="header__temp">{temp}</span>
      <span>{name}</span>
    </>
  );
}

PaintWeather.propTypes = {
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default PaintWeather;
