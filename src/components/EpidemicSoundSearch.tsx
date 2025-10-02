import { useState } from "react";
import { Search, Play, Mic, MicOff, TrendingUp, Palette, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

interface EpidemicTrack {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  coverArtUrl: string;
  audioFile: {
    durationInMilliseconds: number;
    lqmp3Url: string;
    waveformUrl: string;
  };
  tags: Array<{
    displayName: string;
    dimension: {
      name: string;
    };
  }>;
  hasVocals?: boolean;
  isTrending?: boolean;
  theme?: string;
}

interface EpidemicSoundSearchProps {
  onTrackSelect?: (track: EpidemicTrack) => void;
}

const EpidemicSoundSearch = ({ onTrackSelect }: EpidemicSoundSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [tracks, setTracks] = useState<EpidemicTrack[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    vocals: false,
    instrumental: false,
    trending: false,
    theme: "All"
  });

  const searchTracks = async (query: string) => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      // This would be replaced with actual API calls using the MCP tools
      // For now, we'll simulate the response
      const mockTracks: EpidemicTrack[] = [
        {
          id: "track-1",
          title: "Digital Dreams",
          artist: "Synthwave Studios",
          bpm: 128,
          coverArtUrl: "/placeholder.svg",
          audioFile: {
            durationInMilliseconds: 180000,
            lqmp3Url: "https://example.com/preview1.mp3",
            waveformUrl: "https://example.com/waveform1.png"
          },
          tags: [
            { displayName: "Electronic", dimension: { name: "Genre" } },
            { displayName: "Energetic", dimension: { name: "Mood" } }
          ],
          hasVocals: false,
          isTrending: true,
          theme: "Energetic"
        },
        {
          id: "track-2",
          title: "Midnight Vibes",
          artist: "Urban Collective",
          bpm: 95,
          coverArtUrl: "/placeholder.svg",
          audioFile: {
            durationInMilliseconds: 200000,
            lqmp3Url: "https://example.com/preview2.mp3",
            waveformUrl: "https://example.com/waveform2.png"
          },
          tags: [
            { displayName: "Hip Hop", dimension: { name: "Genre" } },
            { displayName: "Chill", dimension: { name: "Mood" } }
          ],
          hasVocals: true,
          isTrending: false,
          theme: "Peaceful"
        }
      ];
      
      setTracks(mockTracks);
    } catch (error) {
      console.error("Error searching tracks:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchSimilarToSpotify = async (url: string) => {
    if (!url.trim()) return;
    
    setLoading(true);
    try {
      // Extract Spotify track ID from URL
      const trackId = url.match(/track\/([a-zA-Z0-9]+)/)?.[1];
      if (!trackId) {
        alert("Invalid Spotify URL");
        return;
      }

      // This would use the Epidemic Sound API to find similar tracks
      // For now, we'll simulate the response
      const mockSimilarTracks: EpidemicTrack[] = [
        {
          id: "similar-1",
          title: "Similar Vibes",
          artist: "Sound Alike",
          bpm: 120,
          coverArtUrl: "/placeholder.svg",
          audioFile: {
            durationInMilliseconds: 190000,
            lqmp3Url: "https://example.com/similar1.mp3",
            waveformUrl: "https://example.com/waveform3.png"
          },
          tags: [
            { displayName: "Pop", dimension: { name: "Genre" } },
            { displayName: "Upbeat", dimension: { name: "Mood" } }
          ],
          hasVocals: true,
          isTrending: true,
          theme: "Upbeat"
        }
      ];
      
      setTracks(mockSimilarTracks);
    } catch (error) {
      console.error("Error finding similar tracks:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTracks = tracks.filter(track => {
    if (selectedFilters.vocals && !track.hasVocals) return false;
    if (selectedFilters.instrumental && track.hasVocals) return false;
    if (selectedFilters.trending && !track.isTrending) return false;
    if (selectedFilters.theme !== "All" && track.theme !== selectedFilters.theme) return false;
    return true;
  });

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Search Controls */}
      <div className="space-y-4">
        {/* Regular Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for music by keyword, mood, or genre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && searchTracks(searchQuery)}
            className="pl-10"
          />
          <Button 
            onClick={() => searchTracks(searchQuery)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            size="sm"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>

        {/* Spotify Search */}
        <div className="relative">
          <ExternalLink className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
          <Input
            type="text"
            placeholder="Paste Spotify track URL to find similar tracks..."
            value={spotifyUrl}
            onChange={(e) => setSpotifyUrl(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && searchSimilarToSpotify(spotifyUrl)}
            className="pl-10"
          />
          <Button 
            onClick={() => searchSimilarToSpotify(spotifyUrl)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600"
            size="sm"
            disabled={loading}
          >
            Find Similar
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          <Button 
            variant={selectedFilters.trending ? "default" : "outline"} 
            onClick={() => setSelectedFilters(prev => ({ ...prev, trending: !prev.trending }))}
            size="sm"
          >
            🔥 Trending
          </Button>
          <Button 
            variant={selectedFilters.vocals ? "default" : "outline"} 
            onClick={() => setSelectedFilters(prev => ({ ...prev, vocals: !prev.vocals }))}
            size="sm"
          >
            🎤 Vocals Only
          </Button>
          <Button 
            variant={selectedFilters.instrumental ? "default" : "outline"} 
            onClick={() => setSelectedFilters(prev => ({ ...prev, instrumental: !prev.instrumental }))}
            size="sm"
          >
            🎵 Instrumental Only
          </Button>
          <select 
            value={selectedFilters.theme}
            onChange={(e) => setSelectedFilters(prev => ({ ...prev, theme: e.target.value }))}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
          >
            <option value="All">All Themes</option>
            <option value="Upbeat">Upbeat</option>
            <option value="Dramatic">Dramatic</option>
            <option value="Peaceful">Peaceful</option>
            <option value="Energetic">Energetic</option>
            <option value="Romantic">Romantic</option>
            <option value="Cinematic">Cinematic</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {loading && (
          <div className="text-center py-8 text-gray-500">
            Searching for tracks...
          </div>
        )}
        
        {!loading && filteredTracks.length === 0 && tracks.length > 0 && (
          <div className="text-center py-8 text-gray-500">
            No tracks match your current filters
          </div>
        )}
        
        {!loading && tracks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Search for tracks to get started
          </div>
        )}

        {filteredTracks.map((track) => (
          <div 
            key={track.id} 
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors cursor-pointer"
            onClick={() => onTrackSelect?.(track)}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative">
              <img 
                src={track.coverArtUrl} 
                alt={track.title}
                className="w-full h-full rounded-lg object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              {track.isTrending && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-2.5 h-2.5 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-gray-900 truncate">{track.title}</h4>
                {track.isTrending && (
                  <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800">
                    Trending
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 truncate">{track.artist}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500">{track.bpm} BPM</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{formatDuration(track.audioFile.durationInMilliseconds)}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">
                  {track.tags.map(tag => tag.displayName).join(", ")}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select 
                value={track.theme}
                onChange={(e) => {
                  e.stopPropagation();
                  // Update track theme
                }}
                className="text-xs border border-gray-200 rounded px-2 py-1 bg-white"
              >
                <option>Upbeat</option>
                <option>Dramatic</option>
                <option>Peaceful</option>
                <option>Energetic</option>
                <option>Romantic</option>
                <option>Cinematic</option>
              </select>
              
              <div className="flex items-center gap-1">
                {track.hasVocals ? (
                  <Mic className="w-4 h-4 text-blue-500" />
                ) : (
                  <MicOff className="w-4 h-4 text-gray-400" />
                )}
              </div>
              
              <Button variant="outline" size="sm">
                <Play className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpidemicSoundSearch;
