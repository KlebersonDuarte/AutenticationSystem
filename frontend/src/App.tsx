import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./apps/login/login";
import Dashboard from "./apps/dashboard/dashboard";
import Register from "./apps/register/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
