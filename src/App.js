import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Login />} />
          <Route path="/authentication/sign-up" element={<Register/>} />
          <Route path="/authentication/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
