import { useState, lazy, Suspense } from "react";
import Login from "./Login";
import { Users, BarChart3, Activity, HeartHandshake, FileText, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const OverviewTab = lazy(() => import("./tabs/OverviewTab"));
const StudentDataTab = lazy(() => import("./tabs/StudentDataTab"));
const AnalyticsTab = lazy(() => import("./tabs/AnalyticsTab"));
const MonitoringTab = lazy(() => import("./tabs/MonitoringTab"));
const SupportTab = lazy(() => import("./tabs/SupportTab"));
const StudentProfileTab = lazy(() => import("./tabs/StudentProfileTab"));

export default function SoulSpaceDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "Overview", icon: <FileText /> },
    { id: "student-data", label: "Student Data", icon: <Users /> },
    { id: "analytics", label: "Analytics & Reports", icon: <BarChart3 /> },
    { id: "monitoring", label: "Student Monitoring", icon: <Activity /> },
    { id: "support", label: "Support & Intervention", icon: <HeartHandshake /> },
    { id: "student-profile", label: "Student Profile", icon: <Users /> },
  ];

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-x-hidden font-sans">
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-white rounded shadow hover:bg-gray-100 transition"
        >
          <Menu />
        </button>
      </div>
      <aside
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-600 to-blue-500 text-white p-5 flex flex-col justify-between transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div>
          <div className="flex items-center mb-8 justify-center md:justify-start">
            <img
              src="/soulspace-logo.png"
              alt="SoulSpace Logo"
              className="h-10 w-10 mr-3"
            />
            <h1 className="text-3xl font-bold text-white tracking-tight">
              SoulSpace
            </h1>
          </div>
          <nav className="flex flex-col items-start gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition hover:bg-white/20 ${
                  activeTab === tab.id ? "bg-white/25 font-semibold" : "font-medium"
                }`}
              >
                {tab.icon} <span className="text-white whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="w-full mt-8 bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <main className="flex-1 p-6">
        <div className="max-w-[1200px] mx-auto">
          <AnimatePresence exitBeforeEnter>
            <Suspense
              fallback={
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-gray-200 h-28 rounded-xl animate-pulse"></div>
                    ))}
                  </div>
                  <div className="bg-gray-200 h-64 rounded-xl animate-pulse mt-6"></div>
                </div>
              }
            >
              {activeTab === "overview" && (
                <motion.div key="overview" {...animationProps}>
                  <OverviewTab />
                </motion.div>
              )}
              {activeTab === "student-data" && (
                <motion.div key="student-data" {...animationProps}>
                  <StudentDataTab />
                </motion.div>
              )}
              {activeTab === "analytics" && (
                <motion.div key="analytics" {...animationProps}>
                  <AnalyticsTab />
                </motion.div>
              )}
              {activeTab === "monitoring" && (
                <motion.div key="monitoring" {...animationProps}>
                  <MonitoringTab />
                </motion.div>
              )}
              {activeTab === "support" && (
                <motion.div key="support" {...animationProps}>
                  <SupportTab />
                </motion.div>
              )}
              {activeTab === "student-profile" && (
                <motion.div key="student-profile" {...animationProps}>
                  <StudentProfileTab />
                </motion.div>
              )}
            </Suspense>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}