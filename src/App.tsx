import { Route, Routes } from "react-router-dom";
import Meals from "./containers/Meals/Meals";
import NewMeal from "./containers/NewMeal/NewMeal";
import Layout from "./components/Layout/Layout";
import EditMeal from "./containers/EditMeal/EditMeal";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Meals />}></Route>
        <Route path="/edit-meal/:id" element={<EditMeal />} />
        <Route path="/new-meal" element={<NewMeal />}></Route>
        <Route
          path="*"
          element={
            <div className="d-flex justify-content-center mt-5 pt-5">
              <h1>Not Found!</h1>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
