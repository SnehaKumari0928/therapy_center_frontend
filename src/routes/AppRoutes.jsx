import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "../components/common/Home";
import Register from "../Pages/auth/Register";
import Login from "../Pages/auth/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes