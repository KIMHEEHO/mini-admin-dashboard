import { Link } from "react-router-dom";

const Sidebar = () => {

  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/users", label: "Users" },
    { path: "/board", label: "Board" },
  ];

  return (
    <nav>
      <ul>
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
