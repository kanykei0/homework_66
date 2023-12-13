import React from "react";
import { foodProps } from "../../types";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ButtonSpinner from "../Spinner/ButtonSpinner";

interface Props {
  id: string;
  meal: foodProps;
  onDelete: React.MouseEventHandler;
  isLoading?: boolean;
}

const Meal: React.FC<Props> = ({ id, meal, onDelete, isLoading = false }) => {
  return (
    <div className="card m-2">
      <div className="card-body row">
        <div className="col">
          <h6 className="card-subtitle mt-1 mb-2 text-body-secondary">
            {meal.category}
          </h6>
          <p className="card-text">{meal.description}</p>
        </div>
        <div className="col-1 d-flex flex-column justify-content-center">
          <strong>{meal.kcal} kcal</strong>
        </div>
        <div className="col-1">
          <Link to={`/edit-meal/${id}`} className="btn p-0">
            <PencilSquare />
          </Link>
          <button
            className="btn p-0 d-block"
            onClick={onDelete}
            disabled={isLoading}
          >
            {isLoading ? <ButtonSpinner /> : <Trash3 />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
