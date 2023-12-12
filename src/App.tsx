import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Foods from "./containers/Foods/Foods";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Foods />}></Route>
          <Route path="/new-meal" element></Route>
          <Route
            path="*"
            element={
              <div className="d-flex justify-content-center mt-5 pt-5">
                <h1>Not Found!</h1>
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
