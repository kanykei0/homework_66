import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element></Route>
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
