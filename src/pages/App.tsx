import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Model from "./Model";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
