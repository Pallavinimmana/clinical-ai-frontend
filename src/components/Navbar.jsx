import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white px-6 py-3 flex justify-between items-center shadow">
      <h1 className="font-bold text-lg">Clinical AI</h1>

      <div className="space-x-4">
        <Link to="/reports" className="hover:text-indigo-200">
          Reports
        </Link>
        <Link to="/labs" className="hover:text-indigo-200">
          Labs
        </Link>
        <Link to="/analysis" className="hover:text-indigo-200">
          Analysis
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
