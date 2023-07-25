import { Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Register" element={<Login />} />
    </Routes>
  );
}

export default App;
