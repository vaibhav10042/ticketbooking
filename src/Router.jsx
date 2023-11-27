import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Homepage";
import { Combine } from "./components/Loginpage";
import About from "./components/About";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Combine /> },
  { path: "/about", element: <About /> },
]);
export default router;
