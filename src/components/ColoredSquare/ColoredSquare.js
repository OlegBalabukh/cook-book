import React from 'react';

const ColoredSquare = ({ width, height, color }) => (
  <div
    style={{
      position: "absolute",
      backgroundColor: color,
      height: height,
      width: width
    }}
  />
);

export default ColoredSquare;