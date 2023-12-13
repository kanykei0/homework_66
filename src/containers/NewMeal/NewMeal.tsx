import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { foodProps } from "../../types";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";

const NewMeal = () => {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);

  const createMeal = async (meal: foodProps) => {
    try {
      setCreating(true);
      await axiosApi.post("meals.json", meal);
      navigate("/");
    } finally {
      setCreating(false);
    }
  };

  return (
    <>
      <MealForm onSubmit={createMeal} isLoading={creating} />
    </>
  );
};

export default NewMeal;
