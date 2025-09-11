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
    albumColor: "bg-music-orange"
  },
  { 
    title: "Return to Future", 
    artist: "Oh the City", 
    mood: "Dreamy, Eccentric", 
    genre: "Electronic",
    albumColor: "bg-music-blue"
  },
  { 
    title: "Pink Pulsar", 
    artist: "Ambient Collective", 
    mood: "Dreamy, Epic", 
    genre: "Ambient, Electronic",
    albumColor: "bg-music-pink"
  },
  { 
    title: "Neon Dreams", 
    artist: "Synthwave Studios", 
    mood: "Energetic, Futuristic", 
    genre: "Synthwave",
    albumColor: "bg-music-purple"
  },
  { 
    title: "Ocean Breeze", 
    artist: "Coastal Sounds", 
    mood: "Relaxing, Peaceful", 
    genre: "Ambient",
    albumColor: "bg-music-teal"
  },
];

const MusicLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMood = selectedMood === "All" || song.mood.includes(selectedMood);
    const matchesGenre = selectedGenre === "All" || song.genre.includes(selectedGenre);
    
    return matchesSearch && matchesMood && matchesGenre;
  });

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
              
              <div className="flex gap-2">
                <Button variant="outline" className="justify-between min-w-24">
                  Mood
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="justify-between min-w-24">
                  Genre
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-12 gap-4 px-3 py-2 text-sm text-muted-foreground border-b border-border">
              <div className="col-span-5">Name</div>
              <div className="col-span-3">Mood</div>
              <div className="col-span-3">Genre</div>
              <div className="col-span-1"></div>
            </div>

            <div className="space-y-1">
              {filteredSongs.map((song, index) => (
                <SongItem
                  key={index}
                  title={song.title}
                  artist={song.artist}
                  mood={song.mood}
                  genre={song.genre}
                  albumColor={song.albumColor}
                />
              ))}
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