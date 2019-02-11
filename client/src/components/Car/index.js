import React from "react";
const Car = ({ owner, model, car_no }) => {
  return (
    <div className="car">
      <h2>{owner}'s Car</h2>
      <h4>{model}</h4>
      <h4>{car_no}</h4>
    </div>
  );
};
export default Car;
