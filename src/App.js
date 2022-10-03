import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Heropage from "./Components/Heropage";
import Create from "./Components/Create";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
