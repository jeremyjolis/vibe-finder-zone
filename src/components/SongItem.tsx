import { Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SongItemProps {
  title: string;
  artist: string;
  mood: string;
  genre: string;
  albumColor: string;
}

const SongItem = ({ title, artist, mood, genre, albumColor }: SongItemProps) => {
  return (
    <div className="flex items-center gap-4 p-3 hover:bg-muted/30 rounded-lg transition-colors group">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${albumColor}`}>
        <Music className="w-6 h-6 text-white" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground truncate">{title}</h4>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
      </div>
      
      <div className="hidden md:block text-sm text-muted-foreground min-w-0">
        <div className="truncate">{mood}</div>
      </div>
      
      <div className="hidden md:block text-sm text-muted-foreground min-w-0">
        <div className="truncate">{genre}</div>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Play className="w-4 h-4 mr-2" />
        Play Sample
      </Button>
    </div>
  );
};

export default SongItem;