import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MenuPage from "./pages/menu/MenuPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
