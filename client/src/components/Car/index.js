import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Car = ({ owner, model, car_no }) => {
  return (
    <Card className="car">
      <CardContent>
        <Typography variant="h6">{owner}'s Car</Typography>
        <Typography variant="subtitle1">{model}</Typography>
        <Typography variant="subtitle1">{car_no}</Typography>
      </CardContent>
    </Card>
  );
};
export default Car;
