import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
