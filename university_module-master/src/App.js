import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Terms from "./Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
