import { useState } from "react";
import { foodProps } from "../../types";
import { Form } from "react-bootstrap";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const initialState: foodProps = {
  category: "",
  description: "",
  kcal: 0,
};

interface Props {
  onSubmit: (meal: foodProps) => void;
  isEdit?: boolean;
  isLoading?: boolean;
  existingDish?: foodProps;
}

const MealForm: React.FC<Props> = ({
  onSubmit,
  isEdit,
  isLoading,
  existingDish = initialState,
}) => {
  const [food, setFood] = useState<foodProps>(existingDish);

  const onChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFood((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isLoading) return;

    onSubmit({
      ...food,
    });
  };

  return (
    <>
      <h4>{isEdit ? "Edit meal" : "Add new meal"}</h4>
      <Form onSubmit={formSubmit} className="my-4 col-8">
        <div>
          <div className="mb-3">
            <select
              className="form-select"
              onChange={onChange}
              name="category"
              required
            >
              <option>Choose category</option>
              <option value="breakfast">Breakfast</option>
              <option value="snack">Snack</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Meal description
            </label>
            <input
              onChange={onChange}
              name="description"
              type="text"
              className="form-control"
              id="description"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="kcal" className="form-label">
              Meal kcal
            </label>
            <input
              className="form-control"
              type="number"
              id="kcal"
              name="kcal"
              onChange={onChange}
              required
            ></input>
          </div>
        </div>
        <button type="submit" className="btn btn-success" disabled={isLoading}>
          {isLoading && <ButtonSpinner />}
          {isEdit ? "Update" : "Create"}
        </button>
      </Form>
    </>
  );
};

export default MealForm;
