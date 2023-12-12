import React from "react";
import { Foods } from "../../types";
import Food from "./Food";

interface Props {
  foods: Foods | null;
}

const FoodList: React.FC<Props> = ({ foods }) => {
  return (
    <>
      <div>
        {foods ? (
          Object.keys(foods).map((key) => <Food key={key} food={foods[key]} />)
        ) : (
          <>lsl</>
        )}
      </div>
    </>
  );
};

export default FoodList;
