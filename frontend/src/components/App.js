import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/App.css";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import CalendarPage from "../pages/Calendar"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
