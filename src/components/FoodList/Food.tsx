import React from "react";
import { foodProps } from "../../types";

interface Props {
  food: foodProps;
}

const Food: React.FC<Props> = ({ food }) => {
  return (
    <>
      <div>
        <h3>{food.category}</h3>
        <p>{food.description}</p>
        <span>{food.kcal}</span>
      </div>
    </>
  );
};

export default Food;
