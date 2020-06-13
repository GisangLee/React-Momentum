import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function PaintWeather({ temp, name }) {
  return (
    <>
      <Temp>{temp} °C</Temp>
      <Place>{name}</Place>
    </>
  );
}

const Temp = styled.span`
  margin-right: 30px;
`;

const Place = styled.span`
  font-size: 30px;
`;

PaintWeather.propTypes = {
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default PaintWeather;
