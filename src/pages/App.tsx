import { BrowserRouter, Route, Routes } from "react-router-dom";
import nookies from 'nookies'

import Home from "./Home";
import Model from "./Model";
import { WikiPage } from "./Wiki";
import { tokenService } from "../services/tokenService";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/my-stage" element={<Home />} />
        <Route path="/forms" element={<Home />} />
        <Route path="/wiki" element={<WikiPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

export async function getServerSideProps(ctx: any) {
  nookies.get(ctx);

  return { 
    props: {
      token: tokenService.get(ctx)
    }
  }
}