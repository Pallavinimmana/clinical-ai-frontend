import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import Labs from "./pages/Labs";
import Analysis from "./pages/Analysis";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
