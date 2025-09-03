import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";
import Nav from "./components/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/schools" replace />} />
        <Route path="/add" element={<AddSchool />} />
        <Route path="/schools" element={<ShowSchools />} />
        <Route path="*" element={<Navigate to="/schools" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
