
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UserDetailsPage from "./pages/UserDetailsPage";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/user" element={<UserPage />} />
       <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
