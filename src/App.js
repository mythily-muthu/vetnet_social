import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Login />} />
          <Route path="/authentication/sign-up" element={<Register />} />
          <Route
            path="/authentication/forgot-password"
            element={<ForgotPassword />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
