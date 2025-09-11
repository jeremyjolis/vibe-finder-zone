import { MoreVertical, Wifi, Battery } from "lucide-react";

const MobilePreview = () => {
  return (
    <div className="w-80 flex flex-col items-center">
      <div className="bg-black rounded-3xl p-2 shadow-2xl">
        <div className="bg-black rounded-2xl w-64 h-[500px] relative overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-2 text-white text-xs">
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-white font-medium">9:41</div>
            <div className="flex items-center gap-1">
              <Wifi className="w-3 h-3" />
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
              </div>
              <Battery className="w-4 h-3" />
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-6 h-full flex flex-col">
            <div className="text-white text-right mb-4">
              <MoreVertical className="w-5 h-5 ml-auto" />
            </div>
            
            <div className="flex-1 flex items-end">
              <div className="text-white text-sm bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2">
                Preview will appear here
              </div>
            </div>

            {/* Bottom navigation hint */}
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">Your story is ready to publish</p>
      </div>
    </div>
  );
};

export default MobilePreview;