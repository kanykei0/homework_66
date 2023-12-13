import { useCallback, useEffect, useState } from "react";
import { Foods } from "../../types";
import axiosApi from "../../axiosApi";
import FoodList from "../../components/MealList/MealList";
import { Spinner } from "react-bootstrap";

const Meals = () => {
  const [meals, setMeals] = useState<Foods | null>(null);
  const [loading, setLoading] = useState(false);
  const [calories, setCalories] = useState(0);
  const [loadingState, setLoadingState] = useState<{ [key: string]: boolean }>(
    {}
  );

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get("meals.json");
      setMeals(response.data);
    } finally {
      setLoading(false);
    }
  };

  const totalCalories = useCallback(() => {
    if (meals) {
      const calories = Object.values(meals).reduce((num: number, meal) => {
        const kcalValue =
          meal.kcal !== undefined ? parseInt(String(meal.kcal), 10) : 0;
        return num + kcalValue;
      }, 0);
      setCalories(calories);
    }
  }, [meals]);

  useEffect(() => {
    void fetchMeals();
  }, []);

  useEffect(() => {
    void totalCalories();
  }, [meals, totalCalories]);

  const deleteMeal = async (id: string) => {
    try {
      setLoadingState((prevLoadingState) => ({
        ...prevLoadingState,
        [id]: true,
      }));
      await axiosApi.delete("meals/" + id + ".json");
      await fetchMeals();
    } finally {
      setLoadingState((prevLoadingState) => ({
        ...prevLoadingState,
        [id]: false,
      }));
    }
  };

  return (
    <div>
      <h5 className="my-5">Total kcal: {calories} kcal</h5>
      {loading ? (
        <Spinner />
      ) : (
        <FoodList
          deleteMeal={deleteMeal}
          meals={meals}
          isLoading={loadingState}
        />
      )}
    </div>
  );
};

export default Meals;
