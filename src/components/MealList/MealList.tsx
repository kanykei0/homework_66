import React from "react";
import { Foods } from "../../types";
import Meal from "./Meal";

interface Props {
  meals: Foods | null;
  deleteMeal: (id: string) => void;
  isLoading?: { [key: string]: boolean } | boolean;
}

const MealList: React.FC<Props> = ({ meals, deleteMeal, isLoading }) => {
  return (
    <>
      <div>
        {meals ? (
          Object.keys(meals).map((key) => (
            <Meal
              id={key}
              key={key}
              meal={meals[key]}
              onDelete={() => deleteMeal(key)}
              isLoading={
                isLoading && typeof isLoading === "object"
                  ? isLoading[key]
                  : false
              }
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
