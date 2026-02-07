export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-3 flex justify-between items-center shadow">
      {/* App Title */}
      <h1 className="text-xl font-bold">Clinical AI</h1>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center text-sm font-medium">
        <a href="/reports" className="hover:underline">
          Reports
        </a>

        <a href="/labs" className="hover:underline">
          Labs
        </a>

        <a href="/clinical-notes" className="hover:underline">
          Clinical Notes
        </a>

        <a href="/analysis" className="hover:underline">
          Analysis
        </a>

        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
