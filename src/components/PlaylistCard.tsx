import { Play } from "lucide-react";

interface PlaylistCardProps {
  title: string;
  gradient: string;
  icon?: string;
  textColor?: string;
}

const PlaylistCard = ({ title, gradient, icon, textColor = "text-white" }: PlaylistCardProps) => {
  return (
    <div 
      className={`relative h-32 rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105 ${gradient}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
      
      <div className="relative h-full p-4 flex flex-col justify-between">
        {icon && (
          <div className="text-right">
            <span className="text-lg">{icon}</span>
          </div>
        )}
        
        <div>
          <h3 className={`font-bold text-lg ${textColor}`}>{title}</h3>
        </div>

        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Play className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;