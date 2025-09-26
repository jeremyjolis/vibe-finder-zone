import { Target, Users, FileCheck, Plus, ChevronDown } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-56 bg-gray-100 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <button className="flex items-center gap-2 text-sm">
            <span>Create Ads</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-gray-200 text-gray-900 rounded"
            >
              <Target className="w-4 h-4" />
              <span>Traffic</span>
            </a>
          </li>
          <li>
            <div className="pl-7 py-1">
              <div className="text-xs text-gray-600 mb-2">United States, All Genders, All Ages</div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 bg-yellow-400 rounded flex items-center justify-center text-xs">📄</div>
                <span>New Ad #1</span>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded"
            >
              <FileCheck className="w-4 h-4" />
              <span>Review & Publish</span>
            </a>
          </li>
        </ul>
        
        <div className="mt-8">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded w-full">
            <Plus className="w-4 h-4" />
            <span>Create New</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;