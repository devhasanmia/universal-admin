import { useState, useMemo } from "react";
import { 
  Search, 
  Filter, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal,
  Plus,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  TrendingUp,
  UserCheck,
  Clock,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Settings,
  RefreshCw,
  SortAsc,
  SortDesc
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../components/ui/Table";

interface Order {
  id: number;
  user: { 
    image: string; 
    name: string; 
    role: string; 
    email: string;
    phone: string;
    joinDate: string;
  };
  projectName: string;
  team: { images: string[] };
  status: string;
  budget: string;
  progress: number;
  priority: 'High' | 'Medium' | 'Low';
  lastActive: string;
}

const tableData: Order[] = [
  {
    id: 1,
    user: { 
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop", 
      name: "Lindsey Curtis", 
      role: "Web Designer",
      email: "lindsey@company.com",
      phone: "+1 234 567 8901",
      joinDate: "2023-01-15"
    },
    projectName: "Agency Website",
    team: { 
      images: [
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      ] 
    },
    budget: "$3.9K",
    status: "Active",
    progress: 75,
    priority: "High",
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    user: { 
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop", 
      name: "Kaiya George", 
      role: "Project Manager",
      email: "kaiya@company.com",
      phone: "+1 234 567 8902",
      joinDate: "2023-02-20"
    },
    projectName: "Technology Platform",
    team: { 
      images: [
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      ] 
    },
    budget: "$24.9K",
    status: "Pending",
    progress: 45,
    priority: "Medium",
    lastActive: "1 day ago"
  },
  {
    id: 3,
    user: { 
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop", 
      name: "Marcus Johnson", 
      role: "UI/UX Designer",
      email: "marcus@company.com",
      phone: "+1 234 567 8903",
      joinDate: "2023-03-10"
    },
    projectName: "Mobile App Design",
    team: { 
      images: [
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      ] 
    },
    budget: "$15.2K",
    status: "Active",
    progress: 90,
    priority: "High",
    lastActive: "30 minutes ago"
  },
  {
    id: 4,
    user: { 
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop", 
      name: "Sofia Rodriguez", 
      role: "Frontend Developer",
      email: "sofia@company.com",
      phone: "+1 234 567 8904",
      joinDate: "2023-04-05"
    },
    projectName: "E-commerce Platform",
    team: { 
      images: [
        "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      ] 
    },
    budget: "$8.7K",
    status: "Completed",
    progress: 100,
    priority: "Low",
    lastActive: "3 days ago"
  },
  {
    id: 5,
    user: { 
      image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop", 
      name: "Alex Thompson", 
      role: "Full Stack Developer",
      email: "alex@company.com",
      phone: "+1 234 567 8905",
      joinDate: "2023-05-12"
    },
    projectName: "Dashboard Analytics",
    team: { 
      images: [
        "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      ] 
    },
    budget: "$12.3K",
    status: "Cancel",
    progress: 25,
    priority: "Medium",
    lastActive: "1 week ago"
  },
  {
    id: 6,
    user: { 
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop", 
      name: "Emma Wilson", 
      role: "Backend Developer",
      email: "emma@company.com",
      phone: "+1 234 567 8906",
      joinDate: "2023-06-18"
    },
    projectName: "API Development",
    team: { 
      images: [
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      ] 
    },
    budget: "$18.5K",
    status: "Active",
    progress: 60,
    priority: "High",
    lastActive: "5 hours ago"
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800';
      case 'pending':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800';
      case 'completed':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800';
      case 'cancel':
        return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <CheckCircle2 className="w-3 h-3" />;
      case 'pending':
        return <Clock className="w-3 h-3" />;
      case 'completed':
        return <UserCheck className="w-3 h-3" />;
      case 'cancel':
        return <XCircle className="w-3 h-3" />;
      default:
        return <AlertCircle className="w-3 h-3" />;
    }
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyles(status)}`}>
      {getStatusIcon(status)}
      {status}
    </span>
  );
};

const PriorityBadge = ({ priority }: { priority: 'High' | 'Medium' | 'Low' }) => {
  const getPriorityStyles = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low':
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${getPriorityStyles(priority)}`}>
      {priority}
    </span>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => {
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-emerald-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(progress)}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default function UserManagement() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'name' | 'project' | 'budget' | 'progress'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const itemsPerPage = 6;

  // Filtered & searched data
  const filteredData = useMemo(() => {
    return tableData
      .filter(order => 
        order.user.name.toLowerCase().includes(search.toLowerCase()) ||
        order.projectName.toLowerCase().includes(search.toLowerCase()) ||
        order.user.email.toLowerCase().includes(search.toLowerCase())
      )
      .filter(order => (statusFilter === "All" ? true : order.status === statusFilter))
      .filter(order => (priorityFilter === "All" ? true : order.priority === priorityFilter))
      .sort((a, b) => {
        let aValue, bValue;
        switch (sortBy) {
          case 'name':
            aValue = a.user.name;
            bValue = b.user.name;
            break;
          case 'project':
            aValue = a.projectName;
            bValue = b.projectName;
            break;
          case 'budget':
            aValue = parseFloat(a.budget.replace('$', '').replace('K', ''));
            bValue = parseFloat(b.budget.replace('$', '').replace('K', ''));
            break;
          case 'progress':
            aValue = a.progress;
            bValue = b.progress;
            break;
          default:
            return 0;
        }
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return sortOrder === 'asc' ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number);
      });
  }, [search, statusFilter, priorityFilter, sortBy, sortOrder]);

  // Pagination
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSort = (field: 'name' | 'project' | 'budget' | 'progress') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === paginatedData.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(paginatedData.map(user => user.id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header Section */}
        <div className="mb-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-2">
              <span className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Home</span> 
              <span>/</span> 
              <span className="text-gray-900 dark:text-gray-100 font-medium">User Management</span>
            </div>
          </nav>
          
          {/* Title & Actions */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  User Management
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Manage your team members, projects, and collaborations
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm">
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline">Import</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Plus className="w-4 h-4" />
                <span>Add User</span>
              </button>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/50 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{tableData.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Total Users</div>
                </div>
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/50 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {tableData.filter(item => item.status === 'Active').length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Active</div>
                </div>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/50 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-amber-600 dark:text-amber-400">
                    {tableData.filter(item => item.status === 'Pending').length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Pending</div>
                </div>
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/50 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {tableData.filter(item => item.status === 'Completed').length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Completed</div>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                  <UserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/50 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    ${Math.round(tableData.reduce((sum, item) => sum + parseFloat(item.budget.replace('$', '').replace('K', '')), 0))}K
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Total Budget</div>
                </div>
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl">
                  <DollarSign className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/50 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, project, or email..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-3.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white appearance-none bg-white/50 dark:bg-gray-700/50 cursor-pointer transition-all duration-200 min-w-[140px]"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancel">Cancelled</option>
                </select>
              </div>

              <div className="relative">
                <AlertCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={priorityFilter}
                  onChange={e => setPriorityFilter(e.target.value)}
                  className="pl-10 pr-8 py-3.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white appearance-none bg-white/50 dark:bg-gray-700/50 cursor-pointer transition-all duration-200 min-w-[140px]"
                >
                  <option value="All">All Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <button className="flex items-center gap-2 px-4 py-3.5 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200">
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedUsers.length > 0 && (
            <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center justify-between">
                <span className="text-sm text-indigo-700 dark:text-indigo-300">
                  {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
                </span>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Mail className="w-3 h-3" />
                    Email
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-xs bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors">
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Table */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/50 overflow-hidden">
          {/* Mobile Card View */}
          <div className="lg:hidden">
            {paginatedData.map(order => (
              <div key={order.id} className="p-6 border-b border-gray-100 dark:border-gray-700/50 last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={order.user.image} 
                        alt={order.user.name} 
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white dark:ring-gray-700 shadow-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-lg">{order.user.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{order.user.role}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{order.user.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PriorityBadge priority={order.priority} />
                    <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Project:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{order.projectName}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Status:</span>
                    <StatusBadge status={order.status} />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Budget:</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{order.budget}</span>
                  </div>

                  <div>
                    <ProgressBar progress={order.progress} />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Team:</span>
                    <div className="flex -space-x-2">
                      {order.team.images.slice(0, 3).map((img, i) => (
                        <img 
                          key={i} 
                          src={img} 
                          alt="Team member"
                          className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-gray-800 hover:z-10 hover:scale-110 transition-transform"
                        />
                      ))}
                      {order.team.images.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <span className="text-xs text-gray-600 dark:text-gray-400">+{order.team.images.length - 3}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-500">Last active: {order.lastActive}</span>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50/50 dark:bg-gray-700/30">
                <TableRow>
                  <TableCell isHeader>
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === paginatedData.length && paginatedData.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </TableCell>
                  <TableCell isHeader>
                    <button 
                      onClick={() => handleSort('name')}
                      className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      User
                      {sortBy === 'name' && (sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />)}
                    </button>
                  </TableCell>
                  <TableCell isHeader>
                    <button 
                      onClick={() => handleSort('project')}
                      className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Project
                      {sortBy === 'project' && (sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />)}
                    </button>
                  </TableCell>
                  <TableCell isHeader>Team</TableCell>
                  <TableCell isHeader>Status</TableCell>
                  <TableCell isHeader>Priority</TableCell>
                  <TableCell isHeader>
                    <button 
                      onClick={() => handleSort('progress')}
                      className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Progress
                      {sortBy === 'progress' && (sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />)}
                    </button>
                  </TableCell>
                  <TableCell isHeader>
                    <button 
                      onClick={() => handleSort('budget')}
                      className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Budget
                      {sortBy === 'budget' && (sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />)}
                    </button>
                  </TableCell>
                  <TableCell isHeader>Actions</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map(order => (
                  <TableRow key={order.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30">
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(order.id)}
                        onChange={() => handleSelectUser(order.id)}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src={order.user.image} 
                            alt={order.user.name} 
                            className="w-12 h-12 rounded-2xl object-cover ring-2 ring-white dark:ring-gray-700 shadow-sm"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{order.user.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{order.user.role}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">{order.user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{order.projectName}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">Last active: {order.lastActive}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex -space-x-2">
                        {order.team.images.slice(0, 4).map((img, i) => (
                          <img 
                            key={i} 
                            src={img} 
                            alt="Team member"
                            className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-gray-800 hover:z-10 hover:scale-110 transition-transform shadow-sm"
                          />
                        ))}
                        {order.team.images.length > 4 && (
                          <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center shadow-sm">
                            <span className="text-xs text-gray-600 dark:text-gray-400">+{order.team.images.length - 4}</span>
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={order.status} />
                    </TableCell>
                    <TableCell>
                      <PriorityBadge priority={order.priority} />
                    </TableCell>
                    <TableCell>
                      <div className="w-24">
                        <ProgressBar progress={order.progress} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold text-gray-900 dark:text-white">{order.budget}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <button className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Empty State */}
          {paginatedData.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 dark:bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No users found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors mx-auto">
                <Plus className="w-4 h-4" />
                Add New User
              </button>
            </div>
          )}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-5 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/50 mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing <span className="font-medium text-gray-900 dark:text-white">{((currentPage - 1) * itemsPerPage) + 1}</span> to <span className="font-medium text-gray-900 dark:text-white">{Math.min(currentPage * itemsPerPage, filteredData.length)}</span> of <span className="font-medium text-gray-900 dark:text-white">{filteredData.length}</span> results
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 bg-white/50 dark:bg-gray-700/50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        currentPage === pageNum 
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" 
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white/50 dark:bg-gray-700/50"
                      }`}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 bg-white/50 dark:bg-gray-700/50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}