import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Pokemon } from "./pages/Pokemon";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

export const Rotas = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} exact>
    //       {/* <Route path="/" element={<Pokemon />}/> */}
    //     </Route>
    //     <Route path="/pokemon" element={<Pokemon />}/>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
};
