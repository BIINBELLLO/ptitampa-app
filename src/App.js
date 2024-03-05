import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import EmailConfirmation from "./pages/Auth/EmailConfirmation";
import VerifyCode from "./pages/Auth/VerifyCode";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import DataSearch from "./pages/DataSearch/DataSearch";
import SubmitVerify from "./pages/DataSearch/SubmitVerify";

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

        <Route path="/data-search" element={<DataSearch />} />
        <Route path="/submit-verify" element={<SubmitVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
