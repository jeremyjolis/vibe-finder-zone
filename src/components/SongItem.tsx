import { Play, Music, Mic, MicOff, TrendingUp, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

interface SongItemProps {
  title: string;
  artist: string;
  mood: string;
  genre: string;
  albumColor: string;
  hasVocals?: boolean;
  isTrending?: boolean;
  theme?: string;
  onVocalsToggle?: (hasVocals: boolean) => void;
  onThemeChange?: (theme: string) => void;
}

const SongItem = ({ 
  title, 
  artist, 
  mood, 
  genre, 
  albumColor, 
  hasVocals = true,
  isTrending = false,
  theme = "Upbeat",
  onVocalsToggle,
  onThemeChange
}: SongItemProps) => {
  const themes = ["Upbeat", "Dramatic", "Peaceful", "Energetic", "Romantic", "Cinematic"];

  return (
    <div className="flex items-center gap-4 p-3 hover:bg-muted/30 rounded-lg transition-colors group border border-transparent hover:border-gray-200">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${albumColor} relative`}>
        <Music className="w-6 h-6 text-white" />
        {isTrending && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-2.5 h-2.5 text-white" />
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium text-foreground truncate">{title}</h4>
          {isTrending && (
            <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800">
              Trending
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
      </div>
      
      <div className="hidden lg:block text-sm text-muted-foreground min-w-0">
        <div className="truncate">{mood}</div>
      </div>
      
      <div className="hidden lg:block text-sm text-muted-foreground min-w-0">
        <div className="truncate">{genre}</div>
      </div>

      {/* Theme Selector */}
      <div className="hidden md:flex items-center gap-2 min-w-0">
        <Palette className="w-4 h-4 text-muted-foreground" />
        <select 
          value={theme}
          onChange={(e) => onThemeChange?.(e.target.value)}
          className="text-sm border border-gray-200 rounded px-2 py-1 bg-white"
        >
          {themes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Vocals Toggle */}
      <div className="hidden md:flex items-center gap-2">
        {hasVocals ? (
          <Mic className="w-4 h-4 text-blue-500" />
        ) : (
          <MicOff className="w-4 h-4 text-gray-400" />
        )}
        <Switch
          checked={hasVocals}
          onCheckedChange={onVocalsToggle}
          className="scale-75"
        />
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