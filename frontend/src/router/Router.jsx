import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import AllLinks from "../pages/AllLinks/AllLinks.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-links" element={<AllLinks />} />
    </Routes>
  );
};

export default Router;
