import React from "react";
import { Foods } from "../../types";
import Meal from "./Meal";

interface Props {
  meals: Foods | null;
  deleteMeal: (id: string) => void;
}

const MealList: React.FC<Props> = ({ meals, deleteMeal }) => {
  return (
    <>
      <div>
        {meals ? (
          Object.keys(meals).map((key) => (
            <Meal
              key={key}
              meal={meals[key]}
              onDelete={() => deleteMeal(key)}
            />
          ))
        ) : (
          <h5>Empty</h5>
        )}
      </div>
    </>
  );
};

export default MealList;
