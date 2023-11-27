import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Combine } from "./components/Loginpage";
import Homepage from "./components/Homepage";
import About from "./components/About";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/combine" element={<Combine />}></Route>
      </Routes> */}
      <About></About>
    </>
  );
}

export default App;
