import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Homepage";
import { Combine } from "./components/Loginpage";
const router =createBrowserRouter([
    {path:"/",element:<Home />},
    {path:"/login",element:<Combine />},
]);
export default router;