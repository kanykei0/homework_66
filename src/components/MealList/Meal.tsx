import React from "react";
import { foodProps } from "../../types";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";

interface Props {
  meal: foodProps;
  onDelete: React.MouseEventHandler;
}

const Meal: React.FC<Props> = ({ meal, onDelete }) => {
  return (
    <div className="card m-2">
      <div className="card-body row">
        <div className="col">
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {meal.category}
          </h6>
          <p className="card-text">{meal.description}</p>
        </div>
        <div className="col-1">
          <span>{meal.kcal}</span>
        </div>
        <div className="col-1">
          <button className="btn p-0 d-block">
            <PencilSquare />
          </button>
          <button className="btn p-0 d-block" onClick={onDelete}>
            <Trash3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
