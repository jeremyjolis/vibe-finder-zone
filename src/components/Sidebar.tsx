import { ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="w-64 bg-muted/30 border-r border-border h-screen flex flex-col">
      <div className="p-4">
        <Button variant="outline" className="w-full justify-between">
          Create Ads
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
            <div className="w-5 h-5 rounded bg-muted flex items-center justify-center">
              <div className="w-2 h-2 bg-foreground/60 rounded-full" />
            </div>
            Awareness & Engagement
          </div>
          
          <div className="ml-7 space-y-1">
            <div className="px-3 py-2 text-sm text-muted-foreground">
              United States, All Genders, All Ages
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 bg-red-50 rounded-md mt-4">
            <div className="w-2 h-2 bg-red-600 rounded-full" />
            New Ad #1
          </div>

          <div className="mt-8 pt-4 border-t border-border">
            <div className="text-sm font-medium px-3 py-2">Review & Publish</div>
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-border">
        <Button variant="outline" className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          Create New
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;