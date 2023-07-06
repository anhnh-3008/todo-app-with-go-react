import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/App.css";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
