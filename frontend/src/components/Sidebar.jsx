import {
  FiClock,
  FiBarChart2,
  FiSettings,
  FiHome,
  FiFileText,
} from "react-icons/fi";

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="brandIcon">FQ</div>

      <SidebarButton active={activePage === "dashboard"} onClick={() => setActivePage("dashboard")} icon={<FiHome />} label="Dashboard" />
      <SidebarButton active={activePage === "history"} onClick={() => setActivePage("history")} icon={<FiClock />} label="History" />
      <SidebarButton active={activePage === "analytics"} onClick={() => setActivePage("analytics")} icon={<FiBarChart2 />} label="Analytics" />
      <SidebarButton active={activePage === "reports"} onClick={() => setActivePage("reports")} icon={<FiFileText />} label="Reports" />
      <SidebarButton active={activePage === "settings"} onClick={() => setActivePage("settings")} icon={<FiSettings />} label="Settings" />
    </aside>
  );
}

function SidebarButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={active ? "activeSidebarButton" : "sidebarButton"}
    >
      {icon}
    </button>
  );
}

export default Sidebar;