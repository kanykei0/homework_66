import React from "react";
import { Foods } from "../../types";
import Meal from "./Meal";

interface Props {
  meals: Foods | null;
}

const MealList: React.FC<Props> = ({ meals }) => {
  return (
    <>
      <div>
        {meals ? (
          Object.keys(meals).map((key) => <Meal key={key} meal={meals[key]} />)
        ) : (
          <h5>Empty</h5>
        )}
      </div>
    </>
  );
};

export default MealList;
