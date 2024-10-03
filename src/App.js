import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { Search } from "./screens/Search";
import { Details } from "./screens/Details";
import { NotFound } from "./screens/NotFound";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/detalhes/:id" element={ <Details/> }/>
          <Route path="/" element={ <Search/> } />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}
