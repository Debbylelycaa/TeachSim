import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Materials from "./pages/Materials";
import ProtectedRoute from "./components/ProtectedRoute";
import Simulation from "./pages/Simulation";
import Evaluation from "./pages/Evaluation";
import History from "./pages/History";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/materials"
          element={
            <ProtectedRoute>
              <Materials />
            </ProtectedRoute>
          }
        />
        <Route
          path="/simulation/:materialId"
          element={
            <ProtectedRoute>
              <Simulation />
            </ProtectedRoute>
          }
        />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
