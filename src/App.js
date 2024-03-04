import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import EmailConfirmation from "./pages/Auth/EmailConfirmation";
import VerifyCode from "./pages/Auth/VerifyCode";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<ErrorPage />} /> */}
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-confirm" element={<EmailConfirmation />} />
        <Route path="/verify-email" element={<VerifyCode />} />
      </Routes>
    </Router>
  );
}

export default App;
