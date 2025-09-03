import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto py-3 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <div className="text-lg font-semibold text-gray-900">SchoolApp</div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <NavLink
            to="/schools"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition-colors ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`
            }
          >
            Schools
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition-colors ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`
            }
          >
            Add School
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
