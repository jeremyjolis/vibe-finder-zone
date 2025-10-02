import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlaylistCard from "./PlaylistCard";
import SongItem from "./SongItem";

const playlists = [
  { title: "Upbeat", gradient: "bg-gradient-to-br from-music-purple to-music-pink", icon: "🎵" },
  { title: "Polished", gradient: "bg-gradient-to-br from-yellow-600 to-yellow-800", icon: "✨" },
  { title: "Modern", gradient: "bg-gradient-to-br from-music-blue to-music-teal", icon: "🎧" },
  { title: "Warm", gradient: "bg-gradient-to-br from-yellow-500 to-orange-500", icon: "🎸" },
  { title: "Seasonal", gradient: "bg-gradient-to-br from-music-coral to-music-orange", icon: "🌴" },
];

const songs = [
  { 
    title: "What a Morning", 
    artist: "Czar Donic", 
    mood: "Countryside, Peaceful", 
    genre: "Hip hop",
    albumColor: "bg-music-orange",
    hasVocals: true,
    isTrending: false,
    theme: "Peaceful"
  },
  { 
    title: "Return to Future", 
    artist: "Oh the City", 
    mood: "Dreamy, Eccentric", 
    genre: "Electronic",
    albumColor: "bg-music-blue",
    hasVocals: false,
    isTrending: true,
    theme: "Energetic"
  },
  { 
    title: "Pink Pulsar", 
    artist: "Ambient Collective", 
    mood: "Dreamy, Epic", 
    genre: "Ambient, Electronic",
    albumColor: "bg-music-pink",
    hasVocals: false,
    isTrending: false,
    theme: "Cinematic"
  },
  { 
    title: "Neon Dreams", 
    artist: "Synthwave Studios", 
    mood: "Energetic, Futuristic", 
    genre: "Synthwave",
    albumColor: "bg-music-purple",
    hasVocals: true,
    isTrending: true,
    theme: "Upbeat"
  },
  { 
    title: "Ocean Breeze", 
    artist: "Coastal Sounds", 
    mood: "Relaxing, Peaceful", 
    genre: "Ambient",
    albumColor: "bg-music-teal",
    hasVocals: false,
    isTrending: false,
    theme: "Peaceful"
  },
  { 
    title: "Electric Nights", 
    artist: "Pulse Collective", 
    mood: "Energetic, Modern", 
    genre: "Electronic",
    albumColor: "bg-music-purple",
    hasVocals: true,
    isTrending: true,
    theme: "Dramatic"
  },
];

const MusicLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [showTrendingOnly, setShowTrendingOnly] = useState(false);
  const [showVocalsOnly, setShowVocalsOnly] = useState(false);
  const [songStates, setSongStates] = useState(songs.map(song => ({
    ...song,
    id: Math.random().toString(36).substr(2, 9)
  })));

  const filteredSongs = songStates.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMood = selectedMood === "All" || song.mood.includes(selectedMood);
    const matchesGenre = selectedGenre === "All" || song.genre.includes(selectedGenre);
    const matchesTrending = !showTrendingOnly || song.isTrending;
    const matchesVocals = !showVocalsOnly || song.hasVocals;
    
    return matchesSearch && matchesMood && matchesGenre && matchesTrending && matchesVocals;
  });

  const handleVocalsToggle = (songId: string, hasVocals: boolean) => {
    setSongStates(prev => prev.map(song => 
      song.id === songId ? { ...song, hasVocals } : song
    ));
  };

  const handleThemeChange = (songId: string, theme: string) => {
    setSongStates(prev => prev.map(song => 
      song.id === songId ? { ...song, theme } : song
    ));
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="library" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="library">Your Library</TabsTrigger>
          <TabsTrigger value="browse">Browse Library</TabsTrigger>
        </TabsList>
        
        <TabsContent value="library" className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Playlists</h2>
            <p className="text-muted-foreground mb-6">
              Your music selections may also be shared to your social media channels.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {playlists.map((playlist) => (
                <PlaylistCard
                  key={playlist.title}
                  title={playlist.title}
                  gradient={playlist.gradient}
                  icon={playlist.icon}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search music tracks"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" className="justify-between min-w-24">
                  Mood
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="justify-between min-w-24">
                  Genre
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant={showTrendingOnly ? "default" : "outline"} 
                  onClick={() => setShowTrendingOnly(!showTrendingOnly)}
                  className="justify-between min-w-24"
                >
                  🔥 Trending
                </Button>
                <Button 
                  variant={showVocalsOnly ? "default" : "outline"} 
                  onClick={() => setShowVocalsOnly(!showVocalsOnly)}
                  className="justify-between min-w-24"
                >
                  🎤 Vocals
                </Button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-12 gap-4 px-3 py-2 text-sm text-muted-foreground border-b border-border">
              <div className="col-span-3">Name</div>
              <div className="col-span-2">Mood</div>
              <div className="col-span-2">Genre</div>
              <div className="col-span-2">Theme</div>
              <div className="col-span-1">Vocals</div>
              <div className="col-span-2"></div>
            </div>

            <div className="space-y-1">
              {filteredSongs.map((song) => (
                <SongItem
                  key={song.id}
                  title={song.title}
                  artist={song.artist}
                  mood={song.mood}
                  genre={song.genre}
                  albumColor={song.albumColor}
                  hasVocals={song.hasVocals}
                  isTrending={song.isTrending}
                  theme={song.theme}
                  onVocalsToggle={(hasVocals) => handleVocalsToggle(song.id, hasVocals)}
                  onThemeChange={(theme) => handleThemeChange(song.id, theme)}
                />
              ))}
              {filteredSongs.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No tracks found matching your filters
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="browse">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Browse thousands of tracks from our library</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MusicLibrary;