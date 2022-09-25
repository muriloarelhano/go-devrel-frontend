import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./Forms";
import Home from "./Home";
import Model from "./Model";
import { WikiPage } from "./Wiki";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/my-stage" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/wiki" element={<WikiPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;