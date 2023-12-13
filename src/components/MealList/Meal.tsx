import React from "react";
import { foodProps } from "../../types";

interface Props {
  meal: foodProps;
}

const Meal: React.FC<Props> = ({ meal }) => {
  return (
    <>
      <div>
        <h3>{meal.category}</h3>
        <p>{meal.description}</p>
        <span>{meal.kcal}</span>
      </div>
    </>
  );
};

export default Meal;
