import { Edit3, Eye, Trash2 } from "lucide-react";

type StatusColor = keyof typeof statusClasses;

interface DataItem {
  user: {
    name: string;
    role: string;
    avatar: string;
  };
  projectName: string;
  team: string[];
  status: { label: string; color: StatusColor };
  budget: string;
}

const data: DataItem[] = [
  {
    user: {
      name: "Lindsey Curtis",
      role: "Web Designer",
      avatar: "./images/user/user-17.jpg",
    },
    projectName: "Agency Website",
    team: [
      "./images/user/user-22.jpg",
      "./images/user/user-23.jpg",
      "./images/user/user-24.jpg",
    ],
    status: { label: "Active", color: "success" },
    budget: "3.9K",
  },
  // ... (rest same)
];

// Status badge classes
const statusClasses = {
  success:
    "bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500",
  warning:
    "bg-warning-50 text-warning-700 dark:bg-warning-500/15 dark:text-warning-400",
  error:
    "bg-error-50 text-error-700 dark:bg-error-500/15 dark:text-error-500",
};

const UserProjectTable = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Orders
        </h3>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            {/* SVG icon */}
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-center">
          <thead>
            <tr className="border-gray-100 border-y dark:border-gray-800">
              <th className="py-3">
                <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                  User
                </p>
              </th>
              <th className="py-3">
                <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                  Project Name
                </p>
              </th>
              <th className="py-3">
                <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                  Team
                </p>
              </th>
              <th className="py-3">
                <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                  Status
                </p>
              </th>
              <th className="py-3">
                <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                  Budget
                </p>
              </th>
              <th className="py-3">
                <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                  Actions
                </p>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {data.map((item, idx) => (
              <tr key={idx}>
                <td className="py-3 flex items-center justify-center gap-3">
                  <img
                    src={item.user.avatar}
                    alt={item.user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white/90">
                      {item.user.name}
                    </p>
                    <p className="text-gray-500 text-theme-xs dark:text-gray-400">
                      {item.user.role}
                    </p>
                  </div>
                </td>

                <td className="py-3 align-middle">{item.projectName}</td>

                <td className="py-3 flex justify-center -space-x-2">
                  {item.team.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt={`Team member ${i + 1}`}
                      className="h-7 w-7 rounded-full border-2 border-white dark:border-gray-900"
                    />
                  ))}
                </td>

                <td className="py-3 align-middle">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-theme-xs font-medium ${
                      statusClasses[item.status.color] || ""
                    }`}
                  >
                    {item.status.label}
                  </span>
                </td>

                <td className="py-3 align-middle">{item.budget}</td>

                <td className="py-3 text-center align-middle">
                  <div className="inline-flex items-center justify-center gap-2">
                    <button
                      aria-label="View"
                      className="rounded-md p-1 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      aria-label="Edit"
                      className="rounded-md p-1 text-green-600 hover:bg-green-100 dark:hover:bg-green-900"
                    >
                      <Edit3 size={18} />
                    </button>
                    <button
                      aria-label="Delete"
                      className="rounded-md p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserProjectTable;