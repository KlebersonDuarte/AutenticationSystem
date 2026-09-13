import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./apps/login/login";
import Dashboard from "./apps/dashboard/dashboard";
import Register from "./apps/register/register";
import Home from "./apps/home/home";

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
