import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import {
  User,
  Briefcase,
  Car,
  GraduationCap,
  Home,
  Bike,
  Heart,
  Plane,
  LayoutDashboard,
} from "lucide-react";
import { useApplications } from "../../context/ApplicationsContext";
import Companylogo from "../../assets/Image/nextpay.png";

const COLUMNS = [
  { key: "submittedAt", label: "Submitted At" },
  { key: "loanType", label: "Loan Type" },
  { key: "amount", label: "Loan Amount" },
  { key: "name", label: "Full Name" },
  { key: "phone", label: "Phone Number" },
  { key: "email", label: "Email" },
  { key: "city", label: "City" },
  { key: "profession", label: "Profession Type" },
  { key: "message", label: "Message" },
];

const LOAN_TYPES = [
  { name: "Personal Loan", icon: User, color: "text-teal-600" },
  { name: "Business Loan", icon: Briefcase, color: "text-blue-600" },
  { name: "Car Loan", icon: Car, color: "text-indigo-600" },
  { name: "Education Loan", icon: GraduationCap, color: "text-purple-600" },
  { name: "Home Loan", icon: Home, color: "text-orange-600" },
  { name: "Two-Wheeler Loan", icon: Bike, color: "text-cyan-600" },
  { name: "Medical Loan", icon: Heart, color: "text-rose-600" },
  { name: "Travel Loan", icon: Plane, color: "text-emerald-600" },
];

function AdminDashboard() {
  const { applications, removeApplications } = useApplications();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = React.useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("isAdminLoggedIn") !== "true") {
      navigate("/admin");
    }
  }, [navigate]);

  const loanCounts = useMemo(() => {
    const counts = {};
    LOAN_TYPES.forEach((lt) => (counts[lt.name] = 0));
    applications.forEach((app) => {
      if (counts[app.loanType] !== undefined) counts[app.loanType]++;
    });
    return counts;
  }, [applications]);

  const filteredApplications = activeFilter
    ? applications.filter((app) => app.loanType === activeFilter)
    : applications;

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminLoggedIn");
    navigate("/admin");
  };

  const handleDownloadExcel = () => {
    if (filteredApplications.length === 0) return;

    const rows = filteredApplications.map((app) =>
      COLUMNS.reduce((obj, col) => {
        obj[col.label] = app[col.key] ?? "";
        return obj;
      }, {})
    );

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Loan Applications");

    // Auto-width columns
    const maxWidths = COLUMNS.map((col) => ({
      wch: Math.max(col.label.length, ...rows.map((r) => String(r[col.label] ?? "").length)),
    }));
    worksheet["!cols"] = maxWidths;

    XLSX.writeFile(workbook, "loan_applications.xlsx");

    // Remove downloaded applications from the dashboard
    const downloadedIds = filteredApplications.map((app) => app.id);
    removeApplications(downloadedIds);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Bar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={Companylogo} alt="NextPay Logo" className="h-8 w-auto" />
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500 font-medium">Admin Panel</span>
            <button
              onClick={handleLogout}
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {/* Total Applications Card */}
          <button
            onClick={() => setActiveFilter(null)}
            className={`bg-white rounded-2xl p-5 shadow-sm text-left transition hover:shadow-md ${activeFilter === null ? "ring-2 ring-teal-500" : ""}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <LayoutDashboard className="h-4 w-4 text-teal-600" />
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                Total Applications
              </p>
            </div>
            <p className="text-4xl font-bold text-slate-800 mt-1">{applications.length}</p>
          </button>

          {/* Individual Loan Type Cards */}
          {LOAN_TYPES.map((lt) => {
            const Icon = lt.icon;
            return (
              <button
                key={lt.name}
                onClick={() => setActiveFilter(lt.name)}
                className={`bg-white rounded-2xl p-5 shadow-sm text-left transition hover:shadow-md ${activeFilter === lt.name ? "ring-2 ring-teal-500" : ""}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`h-4 w-4 ${lt.color}`} />
                  <p className={`text-xs font-semibold uppercase tracking-widest ${lt.color}`}>
                    {lt.name}
                  </p>
                </div>
                <p className="text-4xl font-bold text-slate-800 mt-1">{loanCounts[lt.name]}</p>
              </button>
            );
          })}
        </div>

        {/* Table Header */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800">
              {activeFilter ? `${activeFilter} Applications` : "All Loan Applications"}
            </h2>
            <button
              onClick={handleDownloadExcel}
              disabled={filteredApplications.length === 0}
              className="flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download Excel
            </button>
          </div>

          {filteredApplications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 mb-4 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-3-3v6M4 6h16M4 10h16M4 14h10M4 18h6"
                />
              </svg>
              <p className="text-sm font-medium">No applications yet.</p>
              <p className="text-xs mt-1">Submitted loan forms will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    {COLUMNS.map((col) => (
                      <th key={col.key} className="px-4 py-3 whitespace-nowrap">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredApplications.map((app, index) => (
                    <tr key={app.id} className="hover:bg-slate-50 transition">
                      <td className="px-4 py-3 text-slate-400 font-medium">{index + 1}</td>
                      {COLUMNS.map((col) => (
                        <td
                          key={col.key}
                          className="px-4 py-3 text-slate-700 whitespace-nowrap max-w-50 truncate"
                          title={app[col.key] ?? ""}
                        >
                          {app[col.key] ?? "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
