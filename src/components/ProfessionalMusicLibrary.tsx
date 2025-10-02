import { useState } from "react";
import { Search, Heart, Plus, Download, Link, Play, Pause, Volume2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  bpm: number;
  genre: string;
  mood: string[];
  key: string;
  instruments: string[];
  hasVocals: boolean;
  isInstrumental: boolean;
  coverArt: string;
  waveform: string;
  audioUrl: string;
  tags: string[];
  isTrending?: boolean;
  theme?: string;
}

const professionalTracks: Track[] = [
  {
    id: "1",
    title: "INDIGO GIRL",
    artist: "MV Archives",
    duration: "4:57",
    bpm: 124,
    genre: "Dance-Pop",
    mood: ["Dreamy", "Restless"],
    key: "C Major",
    instruments: ["Synth", "Drums", "Bass"],
    hasVocals: true,
    isInstrumental: false,
    coverArt: "/placeholder.svg",
    waveform: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M0,50 Q50,20 100,50 T200,50 T300,50 T400,50' stroke='%23666' fill='none'/%3E%3C/svg%3E",
    audioUrl: "",
    tags: ["Electronic", "Upbeat"],
    isTrending: true,
    theme: "Energetic"
  },
  {
    id: "2",
    title: "INDIGO GIRL (Instrumental)",
    artist: "MV Archives",
    duration: "4:57",
    bpm: 124,
    genre: "Dance-Pop",
    mood: ["Dreamy", "Restless"],
    key: "C Major",
    instruments: ["Synth", "Drums", "Bass"],
    hasVocals: false,
    isInstrumental: true,
    coverArt: "/placeholder.svg",
    waveform: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M0,50 Q50,30 100,50 T200,50 T300,50 T400,50' stroke='%23666' fill='none'/%3E%3C/svg%3E",
    audioUrl: "",
    tags: ["Electronic", "Instrumental"],
    theme: "Energetic"
  },
  {
    id: "3",
    title: "Hold Tight",
    artist: "FLYIN",
    duration: "3:11",
    bpm: 140,
    genre: "Progressive Electronic",
    mood: ["Happy", "Restless"],
    key: "G Major",
    instruments: ["Synth", "Electronic Drums", "Bass"],
    hasVocals: false,
    isInstrumental: true,
    coverArt: "/placeholder.svg",
    waveform: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M0,50 Q50,10 100,50 T200,50 T300,50 T400,50' stroke='%23666' fill='none'/%3E%3C/svg%3E",
    audioUrl: "",
    tags: ["Electronic", "Progressive"],
    isTrending: true,
    theme: "Upbeat"
  },
  {
    id: "4",
    title: "Slacker Kid",
    artist: "Speedy The Spider",
    duration: "3:05",
    bpm: 125,
    genre: "Indie Pop",
    mood: ["Happy", "Quirky"],
    key: "D Major",
    instruments: ["Guitar", "Drums", "Bass", "Synth"],
    hasVocals: true,
    isInstrumental: false,
    coverArt: "/placeholder.svg",
    waveform: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M0,50 Q50,25 100,50 T200,50 T300,50 T400,50' stroke='%23666' fill='none'/%3E%3C/svg%3E",
    audioUrl: "",
    tags: ["Indie", "Children's Music"],
    theme: "Upbeat"
  },
  {
    id: "5",
    title: "Asteroid (Instrumental)",
    artist: "Maybe",
    duration: "3:12",
    bpm: 82,
    genre: "Indie Pop",
    mood: ["Dreamy", "Laid Back"],
    key: "A Minor",
    instruments: ["Guitar", "Synth", "Drums"],
    hasVocals: false,
    isInstrumental: true,
    coverArt: "/placeholder.svg",
    waveform: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M0,50 Q50,40 100,50 T200,50 T300,50 T400,50' stroke='%23666' fill='none'/%3E%3C/svg%3E",
    audioUrl: "",
    tags: ["Indie", "Chill"],
    theme: "Peaceful"
  },
  {
    id: "6",
    title: "Asteroid",
    artist: "Maybe",
    duration: "3:12",
    bpm: 82,
    genre: "Indie Pop",
    mood: ["Dreamy", "Laid Back"],
    key: "A Minor",
    instruments: ["Guitar", "Synth", "Drums", "Vocals"],
    hasVocals: true,
    isInstrumental: false,
    coverArt: "/placeholder.svg",
    waveform: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M0,50 Q50,35 100,50 T200,50 T300,50 T400,50' stroke='%23666' fill='none'/%3E%3C/svg%3E",
    audioUrl: "",
    tags: ["Indie", "Vocal"],
    theme: "Peaceful"
  },
  {
    id: "7",
    title: "Molecule",
    artist: "AGST",
    duration: "5:07",
    bpm: 122,
    genre: "Synth-Pop",
    mood: ["Happy", "Restless"],
    key: "F Major",
    instruments: ["Synth", "Electronic Drums", "Bass"],
    hasVocals: false,
    isInstrumental: true,
    coverArt: "/placeholder.svg",
    waveform: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M0,50 Q50,15 100,50 T200,50 T300,50 T400,50' stroke='%23666' fill='none'/%3E%3C/svg%3E",
    audioUrl: "",
    tags: ["Progressive", "Electronic"],
    isTrending: true,
    theme: "Energetic"
  },
  {
    id: "8",
    title: "The Truth I Couldn't Name",
    artist: "Ten Towers",
    duration: "4:06",
    bpm: 95,
    genre: "Classical Crossover",
    mood: ["Epic", "Hopeful"],
    key: "E Minor",
    instruments: ["Orchestra", "Piano", "Strings"],
    hasVocals: false,
    isInstrumental: true,
    coverArt: "/placeholder.svg",
    waveform: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M0,50 Q50,45 100,50 T200,50 T300,50 T400,50' stroke='%23666' fill='none'/%3E%3C/svg%3E",
    audioUrl: "",
    tags: ["Orchestral", "Cinematic"],
    theme: "Cinematic"
  }
];

const ProfessionalMusicLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    moods: [] as string[],
    genres: [] as string[],
    duration: [0, 600] as number[],
    bpm: [60, 180] as number[],
    vocals: "all" as "all" | "vocals" | "instrumental",
    keys: [] as string[],
    instruments: [] as string[],
    trending: false,
    theme: "all" as string
  });
  const [sortBy, setSortBy] = useState("popular");
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());

  const allMoods = ["Dreamy", "Restless", "Happy", "Quirky", "Laid Back", "Epic", "Hopeful"];
  const allGenres = ["Dance-Pop", "Progressive Electronic", "Indie Pop", "Synth-Pop", "Classical Crossover"];
  const allKeys = ["C Major", "G Major", "D Major", "A Minor", "F Major", "E Minor"];
  const allInstruments = ["Synth", "Drums", "Bass", "Guitar", "Electronic Drums", "Vocals", "Orchestra", "Piano", "Strings"];
  const allThemes = ["Energetic", "Upbeat", "Peaceful", "Cinematic", "Dramatic", "Romantic"];

  const filteredTracks = professionalTracks.filter(track => {
    // Search query filter
    if (searchQuery && !track.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !track.artist.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !track.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }

    // Mood filter
    if (selectedFilters.moods.length > 0 && !selectedFilters.moods.some(mood => track.mood.includes(mood))) {
      return false;
    }

    // Genre filter
    if (selectedFilters.genres.length > 0 && !selectedFilters.genres.includes(track.genre)) {
      return false;
    }

    // Duration filter (convert duration to seconds)
    const [minutes, seconds] = track.duration.split(':').map(Number);
    const trackDurationSeconds = minutes * 60 + seconds;
    if (trackDurationSeconds < selectedFilters.duration[0] || trackDurationSeconds > selectedFilters.duration[1]) {
      return false;
    }

    // BPM filter
    if (track.bpm < selectedFilters.bpm[0] || track.bpm > selectedFilters.bpm[1]) {
      return false;
    }

    // Vocals filter
    if (selectedFilters.vocals === "vocals" && !track.hasVocals) return false;
    if (selectedFilters.vocals === "instrumental" && track.hasVocals) return false;

    // Key filter
    if (selectedFilters.keys.length > 0 && !selectedFilters.keys.includes(track.key)) {
      return false;
    }

    // Instruments filter
    if (selectedFilters.instruments.length > 0 && 
        !selectedFilters.instruments.some(instrument => track.instruments.includes(instrument))) {
      return false;
    }

    // Trending filter
    if (selectedFilters.trending && !track.isTrending) {
      return false;
    }

    // Theme filter
    if (selectedFilters.theme !== "all" && track.theme !== selectedFilters.theme) {
      return false;
    }

    return true;
  });

  const toggleLike = (trackId: string) => {
    setLikedTracks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(trackId)) {
        newSet.delete(trackId);
      } else {
        newSet.add(trackId);
      }
      return newSet;
    });
  };

  const togglePlay = (trackId: string) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  const toggleFilterArray = (filterKey: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: (prev[filterKey] as string[]).includes(value)
        ? (prev[filterKey] as string[]).filter(item => item !== value)
        : [...(prev[filterKey] as string[]), value]
    }));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header with filters */}
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:text-gray-300">
              <Filter className="w-4 h-4 mr-2" />
              Moods
            </Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">Genres</Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">Duration</Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">BPM</Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">Vocals</Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">Key</Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">Instruments</Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">📈</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm"
              >
                <option value="popular">Popular</option>
                <option value="newest">Newest</option>
                <option value="duration">Duration</option>
                <option value="bpm">BPM</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">📊</span>
              <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm">
                <option>Newest</option>
                <option>Oldest</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Search and quick filters */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search tracks, artists, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant={selectedFilters.trending ? "default" : "outline"}
              onClick={() => setSelectedFilters(prev => ({ ...prev, trending: !prev.trending }))}
              size="sm"
              className="border-gray-700"
            >
              🔥 Trending
            </Button>
            
            <Button 
              variant={selectedFilters.vocals === "vocals" ? "default" : "outline"}
              onClick={() => setSelectedFilters(prev => ({ 
                ...prev, 
                vocals: prev.vocals === "vocals" ? "all" : "vocals" 
              }))}
              size="sm"
              className="border-gray-700"
            >
              🎤 Vocals
            </Button>
            
            <Button 
              variant={selectedFilters.vocals === "instrumental" ? "default" : "outline"}
              onClick={() => setSelectedFilters(prev => ({ 
                ...prev, 
                vocals: prev.vocals === "instrumental" ? "all" : "instrumental" 
              }))}
              size="sm"
              className="border-gray-700"
            >
              🎵 Instrumental
            </Button>

            <select 
              value={selectedFilters.theme}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, theme: e.target.value }))}
              className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm"
            >
              <option value="all">All Themes</option>
              {allThemes.map(theme => (
                <option key={theme} value={theme}>{theme}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Track list */}
      <div className="p-4">
        <div className="space-y-1">
          {filteredTracks.map((track, index) => (
            <div 
              key={track.id}
              className="flex items-center space-x-4 p-3 hover:bg-gray-800 rounded-lg transition-colors group"
            >
              {/* Selection indicator */}
              <div className="w-1 h-12 bg-yellow-400 rounded-full flex-shrink-0"></div>
              
              {/* Album art */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <img 
                  src={track.coverArt} 
                  alt={track.title}
                  className="w-full h-full rounded object-cover bg-gradient-to-br from-purple-500 to-pink-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {track.title.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                {track.isTrending && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🔥</span>
                  </div>
                )}
              </div>

              {/* Track info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-medium text-white truncate">{track.title}</h3>
                  {track.isInstrumental && (
                    <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                      Instrumental
                    </Badge>
                  )}
                  {track.isTrending && (
                    <Badge variant="secondary" className="text-xs bg-orange-900 text-orange-300">
                      Trending
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-400 truncate">{track.artist}</p>
              </div>

              {/* Vocals indicator */}
              <div className="flex items-center space-x-1 flex-shrink-0">
                {track.hasVocals ? (
                  <Volume2 className="w-4 h-4 text-blue-400" />
                ) : (
                  <div className="w-4 h-4"></div>
                )}
              </div>

              {/* Waveform */}
              <div className="flex-1 max-w-xs">
                <div className="h-12 bg-gray-800 rounded flex items-center justify-center">
                  <div className="w-full h-8 bg-gradient-to-r from-gray-600 to-gray-500 rounded opacity-60"></div>
                </div>
              </div>

              {/* Duration */}
              <div className="text-sm text-gray-400 flex-shrink-0 w-12 text-right">
                {track.duration}
              </div>

              {/* Genre and mood */}
              <div className="text-sm text-gray-400 flex-shrink-0 w-32">
                <div className="truncate">{track.genre}</div>
                <div className="text-xs text-gray-500 truncate">{track.mood.join(", ")}</div>
              </div>

              {/* BPM */}
              <div className="text-sm text-gray-400 flex-shrink-0 w-16 text-center">
                {track.bpm} BPM
              </div>

              {/* Theme selector */}
              <div className="flex-shrink-0">
                <select 
                  value={track.theme || "Upbeat"}
                  onChange={(e) => {
                    // Update track theme
                  }}
                  className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-white"
                >
                  {allThemes.map(theme => (
                    <option key={theme} value={theme}>{theme}</option>
                  ))}
                </select>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleLike(track.id)}
                  className={`p-2 ${likedTracks.has(track.id) ? 'text-red-400' : 'text-gray-400 hover:text-white'}`}
                >
                  <Heart className="w-4 h-4" fill={likedTracks.has(track.id) ? 'currentColor' : 'none'} />
                </Button>
                
                <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white">
                  <Plus className="w-4 h-4" />
                </Button>
                
                <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white">
                  <Download className="w-4 h-4" />
                </Button>
                
                <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white">
                  <Link className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredTracks.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No tracks found matching your filters
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalMusicLibrary;
