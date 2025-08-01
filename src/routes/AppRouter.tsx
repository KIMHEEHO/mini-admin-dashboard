import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/LoginView"
import MainLayout from "../layout/MainLayout";
import BoardList from "../pages/Board/BoardList";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserList from "../pages/Users/UserList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/board" element={<BoardList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;