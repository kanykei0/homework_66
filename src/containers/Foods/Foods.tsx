import { useEffect, useState } from "react";
import { Foods } from "../../types";
import axiosApi from "../../axiosApi";
import FoodList from "../../components/FoodList/FoodList";

const Foods = () => {
  const [foods, setFoods] = useState<Foods | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get("meals.json");
      setFoods(response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchFoods();
  }, []);
  return (
    <div>
      <FoodList foods={foods} />
    </div>
  );
};

export default Foods;
