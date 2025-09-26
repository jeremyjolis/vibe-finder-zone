import { Heart, MessageCircle, Send } from "lucide-react";

const MobilePreview = () => {
  return (
    <div className="w-64 h-[500px] bg-black rounded-[2rem] p-2 relative">
      {/* Phone Frame */}
      <div className="w-full h-full bg-black rounded-[1.5rem] relative overflow-hidden">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/30 to-transparent z-10">
          <div className="flex justify-between items-center px-4 pt-1 text-white text-xs">
            <span>11:04</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              </div>
              <div className="w-6 h-3 border border-white rounded-sm">
                <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Snapchat Story Content */}
        <div className="w-full h-full bg-gradient-to-b from-green-600 to-green-800 relative">
          {/* Story Progress Bar */}
          <div className="absolute top-6 left-4 right-4 h-0.5 bg-white/30 rounded-full z-10">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>

          {/* Profile Info */}
          <div className="absolute top-10 left-4 flex items-center gap-2 z-10">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">👻</span>
            </div>
            <span className="text-white text-sm font-medium">Jer Jol Ad</span>
          </div>

          {/* Main Content Area - Waterfall Video Placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom UI */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Story Actions */}
            <div className="flex justify-between items-end mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">👻</span>
                </div>
                <span className="text-white text-sm">Jer Jol</span>
                <button>
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <button>
                <Heart className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* View Button */}
            <button className="w-full bg-yellow-400 text-black font-medium py-3 rounded-full text-sm">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePreview;