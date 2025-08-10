import React, { useState } from "react";
import { Menu, Bell, Moon, Sun, User } from "lucide-react";

interface TopNavigationProps {
  onToggleSidebar: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  collapsed?: boolean;
  onToggle?: boolean;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  onToggleSidebar,
  darkMode,
  onToggleDarkMode,
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 text-slate-600 cursor-pointer  hover:text-blue-600 hover:bg-slate-100  rounded-lg transition-all duration-200"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        {/* Right side */}
        <div className="flex items-center space-x-3 relative">
          {/* Dark mode toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 text-slate-600 cursor-pointer hover:text-blue-600  hover:bg-slate-100  rounded-lg transition-all duration-200"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative ">
            <button className="p-2 cursor-pointer text-slate-600 hover:text-blue-600 hover:bg-slate-100  rounded-lg transition-all duration-200">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              3
            </span>
          </div>

          {/* Profile dropdown */}
          <div className="flex items-center space-x-2 pl-2 relative cursor-pointer">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-slate-900">John Doe</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-lg transition-all duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
