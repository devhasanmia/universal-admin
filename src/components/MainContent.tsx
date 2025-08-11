import { Outlet } from "react-router";

const MainContent = () => {
  return (
    <main className="flex-1 p-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <Outlet />
    </main>
  );
};

export default MainContent;
