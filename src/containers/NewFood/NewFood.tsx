import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { foodProps } from "../../types";
import { Button, Form } from "react-bootstrap";
import axiosApi from "../../axiosApi";

const NewFood = () => {
  const [food, setFood] = useState<foodProps>({
    category: "",
    description: "",
    kcal: 0,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFood((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      await axiosApi.post("meals.json", food);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={formSubmit}>
      <div className="mt-5">
        <h4>Edit pages</h4>
        <div>
          <div className="mb-3">
            <select
              value={food.category}
              name="category"
              onChange={onChange}
              className="form-select"
              required
            >
              <option value="">Select page</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Snack">Snack</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              name="description"
              value={food.description}
              onChange={onChange}
              type="text"
              className="form-control"
              id="description"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="kcal" className="form-label">
              Kcal
            </label>
            <input
              name="kcal"
              value={food.kcal}
              onChange={onChange}
              type="number"
              className="form-control"
              id="kcal"
              required
            />
          </div>
          <Button variant="success" type="submit">
            Post
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default NewFood;
