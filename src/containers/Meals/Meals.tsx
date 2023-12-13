import { useEffect, useState } from "react";
import { Foods } from "../../types";
import axiosApi from "../../axiosApi";
import FoodList from "../../components/MealList/MealList";
import { Spinner } from "react-bootstrap";

const Meals = () => {
  const [meals, setMeals] = useState<Foods | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get("meals.json");
      setMeals(response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchMeals();
  }, []);
  return <div>{loading ? <Spinner /> : <FoodList meals={meals} />}</div>;
};

export default Meals;
