import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { foodProps } from "../../types";
import axiosApi from "../../axiosApi";
import { Spinner } from "react-bootstrap";
import MealForm from "../../components/MealForm/MealForm";

const EditMeal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<foodProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const fetchMeal = useCallback(async () => {
    try {
      const response = await axiosApi.get<foodProps | null>(
        "meals/" + id + ".json"
      );
      setMeal(response.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchMeal();
  }, [fetchMeal]);

  const onSubmit = async (meal: foodProps) => {
    try {
      setUpdating(true);
      await axiosApi.put("meals/" + id + ".json", meal);
      navigate("/");
    } finally {
      setUpdating(false);
    }
  };

  const existingMeal = meal
    ? {
        ...meal,
      }
    : undefined;

  let formSection = <Spinner />;

  if (!loading) {
    if (meal) {
      formSection = (
        <MealForm
          onSubmit={onSubmit}
          existingMeal={existingMeal}
          isEdit
          isLoading={updating}
        />
      );
    } else {
      formSection = <h4>Not found</h4>;
    }
  }

  return (
    <>
      <div>{formSection}</div>
    </>
  );
};

export default EditMeal;
