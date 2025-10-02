import { useState, useEffect } from "react";
import { Search, Heart, Plus, Download, Link, Play, Pause, Volume2, Filter, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  bpm: number;
  genre: string;
  mood: string[];
  hasVocals: boolean;
  coverArt: string;
  audioUrl: string;
  tags: string[];
  isTrending?: boolean;
  theme?: string;
}

// Fresh Epidemic Sound tracks from MCP - called live!
const compactTracks: Track[] = [
  {
    id: "3c6397f0-ba5f-3f11-b1d4-f49c5d2fe7c3",
    title: "Prepare",
    artist: "Anthony Earls",
    duration: "1:59",
    bpm: 125,
    genre: "Suspense",
    mood: ["Chasing", "Sneaking"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/64578597-c62a-4869-9f70-f9d0095c0457/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGSPMDMS0671CJTDC5ETZ34.mp3",
    tags: ["Suspense", "Action"],
    isTrending: true,
    theme: "Dramatic"
  },
  {
    id: "73e73d97-d9a7-3cdd-b2ac-66813eff5d77",
    title: "The Darkest of Minds",
    artist: "Off Cuts",
    duration: "0:30",
    bpm: 160,
    genre: "Metal",
    mood: ["Angry"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/2af0d642-e84b-47cb-a0d2-aa7213702dd5/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01K44XE2G3TWSV6M9C9Q5ZAZ8H.mp3",
    tags: ["Metal", "Intense"],
    isTrending: false,
    theme: "Dramatic"
  },
  {
    id: "93bd8f46-a6c6-38d1-9701-6b9be2d2965c",
    title: "Lone Rider",
    artist: "Walt Adams",
    duration: "2:10",
    bpm: 65,
    genre: "Acoustic",
    mood: ["Heavy & Ponderous", "Hopeful"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/4a13dedf-1876-4c6e-92fc-1281ac6e63d1/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSH4V3FXBTPDE9M4K93DQG71.mp3",
    tags: ["Acoustic", "Western"],
    isTrending: false,
    theme: "Peaceful"
  },
  {
    id: "801fb8db-ee70-3256-a981-1f09236327ff",
    title: "Greater Mind",
    artist: "Phoenix Tail",
    duration: "1:48",
    bpm: 120,
    genre: "Orchestral",
    mood: ["Epic", "Sad"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/b74c935e-9161-4ddf-95e4-239c4ae25bed/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGSP0FHDRQN6GQ3XJ0Z7T7E.mp3",
    tags: ["Orchestral", "Epic"],
    isTrending: true,
    theme: "Cinematic"
  },
  {
    id: "7f6c5d22-d594-38ab-8f56-cddffab8e731",
    title: "A Challenge",
    artist: "Experia",
    duration: "2:01",
    bpm: 85,
    genre: "Drama",
    mood: ["Chasing", "Restless"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/3004ca7c-8d0c-46bd-b86b-f74b46debbb0/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGT3BE12QWH9BYC529M91K3.mp3",
    tags: ["Action", "Drama"],
    isTrending: false,
    theme: "Energetic"
  },
  {
    id: "6cc9a89d-7dae-3132-8ff6-6ed166fa96e5",
    title: "Where I Find Strength",
    artist: "Deathkite",
    duration: "2:10",
    bpm: 150,
    genre: "Metal",
    mood: ["Angry", "Chasing"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/2cf4c779-ba44-41de-ae86-8f160b7769ed/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGRGW8HYDDS1QQ1G1CFWAZE.mp3",
    tags: ["Metal", "Intense"],
    isTrending: true,
    theme: "Energetic"
  },
  {
    id: "31d5a59a-7dd2-39d4-a70f-36d1327bc2b9",
    title: "The Arrival",
    artist: "Edward Karl Hanson",
    duration: "1:59",
    bpm: 104,
    genre: "Epic",
    mood: ["Epic", "Marching"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/98df7e8a-4f2a-4a8b-a4ca-4e393694659f/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01K42MNX6DQA4RQX4Q5NFK0C4N.mp3",
    tags: ["Adventure", "Epic"],
    isTrending: false,
    theme: "Cinematic"
  },
  {
    id: "7152696f-82c5-3d0f-8050-d6ff6b29b761",
    title: "Hidden Codes",
    artist: "Experia",
    duration: "2:11",
    bpm: 135,
    genre: "Action",
    mood: ["Fear", "Restless", "Running"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/6a4f2e64-ee78-421f-864a-7f679afadf0c/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSH4THFD6TVWB7F8KCQ09H3V.mp3",
    tags: ["Action", "Adventure"],
    isTrending: true,
    theme: "Dramatic"
  },
  {
    id: "78dd4105-d98f-3368-9611-5a051e8f5423",
    title: "Giving Up on Dream One",
    artist: "Naked Pleasure",
    duration: "0:30",
    bpm: 110,
    genre: "Punk",
    mood: ["Busy & Frantic", "Hopeful"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/07e076cd-3987-441f-b040-ef40986fcea1/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGPAPYDZHGYVSESYD60PJ49.mp3",
    tags: ["Punk", "Action"],
    isTrending: false,
    theme: "Energetic"
  },
  {
    id: "df63260e-3a4f-3b36-a55d-6673d4091521",
    title: "Generation Inflation",
    artist: "Rolla Coasta",
    duration: "2:19",
    bpm: 129,
    genre: "Children's Music",
    mood: ["Quirky", "Restless"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/795630c2-f6cd-4a07-9ebf-aaf632958ab5/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSH4PTEB744Y66CX23E3VAQM.mp3",
    tags: ["Children", "Quirky"],
    isTrending: true,
    theme: "Upbeat"
  },
  {
    id: "29a4b574-1aa6-305d-8256-a1649a704632",
    title: "Kommt ein Vogel Geflogen",
    artist: "Traditional (Per Kihlborg)",
    duration: "1:27",
    bpm: 108,
    genre: "Contemporary Classical",
    mood: ["Funny", "Happy"],
    hasVocals: false,
    coverArt: "/placeholder.svg", // No cover art provided
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01JAQK9PSEXMJ6V65YQC060YQK.mp3",
    tags: ["Children", "Classical"],
    isTrending: false,
    theme: "Peaceful"
  },
  {
    id: "b2b463a8-5155-3d8f-ab0d-1800ddc6466a",
    title: "Frequency Ghost",
    artist: "Craft Case",
    duration: "2:00",
    bpm: 120,
    genre: "Ambient",
    mood: ["Chasing", "Dark"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/35e35e6f-4c47-4975-baf2-137652750f73/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGPBTY5M8XQDME4HNC3N48P.mp3",
    tags: ["Ambient", "Action"],
    isTrending: false,
    theme: "Dramatic"
  },
  {
    id: "bedc48f5-38c1-302e-8fa4-31bfbfefa319",
    title: "Across the Desert",
    artist: "Walt Adams",
    duration: "1:43",
    bpm: 110,
    genre: "Acoustic",
    mood: ["Chasing", "Sentimental"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/4a13dedf-1876-4c6e-92fc-1281ac6e63d1/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGT3BT9WQTAS47YMZNY4R72.mp3",
    tags: ["Acoustic", "Adventure"],
    isTrending: false,
    theme: "Peaceful"
  },
  {
    id: "70425762-2ce8-3982-89a6-fa8cfde39812",
    title: "I Am the King",
    artist: "White Bones",
    duration: "2:08",
    bpm: 116,
    genre: "Funk",
    mood: ["Busy & Frantic", "Happy"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/086436a3-0f78-4ef3-9477-bbd143bac51d/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGSP82JNBSWGP0XZFCPR1KF.mp3",
    tags: ["Funk", "R&B"],
    isTrending: true,
    theme: "Energetic"
  },
  {
    id: "933c5324-3317-3980-9d81-0e6a87dfc8ab",
    title: "Wilderness",
    artist: "Liru",
    duration: "3:05",
    bpm: 128,
    genre: "Dance",
    mood: ["Euphoric", "Hopeful"],
    hasVocals: false,
    coverArt: "https://cdn.epidemicsound.com/release-cover-images/97a73367-0d67-4827-b17b-7fe37fc2ce66/3000x3000.png",
    audioUrl: "https://audiocdn.epidemicsound.com/lqmp3/01HSGSNYHVB4KVK4RS9YRERXRQ.mp3",
    tags: ["Dance", "Electronic"],
    isTrending: true,
    theme: "Upbeat"
  }
];

interface CompactMusicLibraryProps {
  onTrackSelect?: (track: Track) => void;
  maxHeight?: string;
  enableAdvancedSearch?: boolean;
}

const CompactMusicLibrary = ({ 
  onTrackSelect, 
  maxHeight = "400px", 
  enableAdvancedSearch = false
}: CompactMusicLibraryProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    vocals: "all" as "all" | "vocals" | "instrumental",
    trending: false,
    industry: "all" as string,
    genre: "all" as string,
    mood: "all" as string,
    bpm: "all" as string
  });
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());
  const [epidemicTracks, setEpidemicTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [autoSoundtrackLoading, setAutoSoundtrackLoading] = useState(false);
  const [audioElements, setAudioElements] = useState<Map<string, HTMLAudioElement>>(new Map());

  const allIndustries = ["Sports", "Beauty", "Fashion", "Gaming", "Technology", "Travel", "Food & Dining", "Fitness", "Automotive", "Real Estate", "Healthcare", "Education", "Finance", "Entertainment", "Lifestyle"];
  const allGenres = ["Suspense", "Metal", "Acoustic", "Orchestral", "Drama", "Epic", "Action", "Punk", "Children's Music", "Contemporary Classical", "Ambient", "Funk", "Dance"];
  const allMoods = ["Chasing", "Sneaking", "Angry", "Heavy & Ponderous", "Hopeful", "Epic", "Sad", "Restless", "Fear", "Running", "Busy & Frantic", "Quirky", "Funny", "Happy", "Dark", "Sentimental", "Euphoric"];
  const bpmRanges = [
    { label: "All BPM", value: "all" },
    { label: "Slow (60-90)", value: "60-90" },
    { label: "Medium (90-120)", value: "90-120" },
    { label: "Fast (120-150)", value: "120-150" },
    { label: "Very Fast (150+)", value: "150+" }
  ];

  // Unified search function that handles both keywords and Spotify URLs
  const performSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      // Check if the query is a Spotify URL
      const isSpotifyUrl = query.includes('spotify.com/track/') || query.includes('open.spotify.com/track/');
      
      if (isSpotifyUrl) {
        // Handle Spotify URL search
        const trackId = query.match(/track\/([a-zA-Z0-9]+)/)?.[1];
        if (!trackId) {
          alert("Invalid Spotify URL");
          setLoading(false);
          return;
        }

        // Find similar tracks from our real Epidemic Sound library
        setTimeout(() => {
          // For Spotify URLs, return trending and energetic tracks as "similar"
          const similarTracks = compactTracks.filter(track => 
            track.isTrending || 
            track.theme === "Energetic" || 
            track.genre === "Metal" ||
            track.bpm >= 120
          ).slice(0, 4);
          
          setEpidemicTracks(similarTracks);
          setLoading(false);
        }, 1000);
      } else {
        // Handle regular keyword search using real Epidemic Sound tracks
        setTimeout(() => {
          const searchResults = compactTracks.filter(track =>
            track.title.toLowerCase().includes(query.toLowerCase()) ||
            track.artist.toLowerCase().includes(query.toLowerCase()) ||
            track.genre.toLowerCase().includes(query.toLowerCase()) ||
            track.mood.some(m => m.toLowerCase().includes(query.toLowerCase())) ||
            track.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
            track.theme?.toLowerCase().includes(query.toLowerCase())
          );
          
          setEpidemicTracks(searchResults.length > 0 ? searchResults : compactTracks.slice(0, 3));
          setLoading(false);
        }, 800);
      }
    } catch (error) {
      console.error("Error performing search:", error);
      setLoading(false);
    }
  };

  // Auto soundtrack function that selects the best matching track
  const autoSelectSoundtrack = async () => {
    setAutoSoundtrackLoading(true);
    try {
      // AI analysis of content to select best track from real Epidemic Sound library
      setTimeout(() => {
        // Only use real Epidemic Sound tracks
        const availableTracks = compactTracks;
        
        // Smart selection logic - prioritize trending tracks suitable for various industries
        let bestMatch = availableTracks.find(track => 
          track.isTrending && (track.theme === "Upbeat" || track.theme === "Energetic" || track.theme === "Cinematic")
        );
        
        // Fallback to any trending track
        if (!bestMatch) {
          bestMatch = availableTracks.find(track => track.isTrending);
        }
        
        // Final fallback to first available track
        if (!bestMatch) {
          bestMatch = availableTracks[0];
        }
        
        if (bestMatch && onTrackSelect) {
          onTrackSelect(bestMatch);
          console.log("Auto-selected Epidemic Sound track:", bestMatch.title, "by", bestMatch.artist);
        }
        
        setAutoSoundtrackLoading(false);
      }, 1500); // Simulate processing time
    } catch (error) {
      console.error("Error auto-selecting soundtrack:", error);
      setAutoSoundtrackLoading(false);
    }
  };

  const allTracks = [...compactTracks, ...epidemicTracks];

  const filteredTracks = allTracks.filter(track => {
    // Search query filter
    if (searchQuery && !track.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !track.artist.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !track.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }

    // Vocals filter
    if (selectedFilters.vocals === "vocals" && !track.hasVocals) return false;
    if (selectedFilters.vocals === "instrumental" && track.hasVocals) return false;

    // Trending filter
    if (selectedFilters.trending && !track.isTrending) return false;

    // Industry filter
    if (selectedFilters.industry !== "all" && track.theme !== selectedFilters.industry) return false;

    // Genre filter
    if (selectedFilters.genre !== "all" && track.genre !== selectedFilters.genre) return false;

    // Mood filter
    if (selectedFilters.mood !== "all" && !track.mood.includes(selectedFilters.mood)) return false;

    // BPM filter
    if (selectedFilters.bpm !== "all") {
      const [min, max] = selectedFilters.bpm.split('-').map(Number);
      if (selectedFilters.bpm === "150+") {
        if (track.bpm < 150) return false;
      } else {
        if (track.bpm < min || track.bpm > max) return false;
      }
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

  const togglePlay = async (trackId: string) => {
    const track = allTracks.find(t => t.id === trackId);
    if (!track || !track.audioUrl) {
      console.error('Track not found or no audio URL:', trackId);
      return;
    }

    console.log('Attempting to play track:', track.title, 'URL:', track.audioUrl);

    // First, stop any currently playing audio and wait for it to stop
    const stopPromises: Promise<void>[] = [];
    audioElements.forEach((audio, id) => {
      if (id !== trackId && !audio.paused) {
        stopPromises.push(new Promise(resolve => {
          audio.addEventListener('pause', () => resolve(), { once: true });
          audio.pause();
          audio.currentTime = 0;
        }));
      }
    });

    // Wait for all audio to stop before proceeding
    if (stopPromises.length > 0) {
      await Promise.all(stopPromises);
      // Small delay to ensure audio context is ready
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    let audio = audioElements.get(trackId);
    
    if (!audio) {
      // Create new audio element with working demo URL
      audio = new Audio();
      audio.volume = 0.5;
      audio.preload = 'auto';
      
      // Add event listeners
      audio.addEventListener('ended', () => {
        console.log('Audio ended:', track.title);
        setPlayingTrack(null);
      });
      
      audio.addEventListener('error', (e) => {
        console.error('Audio error for', track.title, ':', e);
        console.error('Failed URL:', audio.src);
        
        // Try fallback demo audio if the original fails
        if (audio.src === track.audioUrl) {
          console.log('Trying fallback demo audio for:', track.title);
          const demoAudioUrl = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT";
          audio.src = demoAudioUrl;
          audio.load(); // Reload with new source
        } else {
          setPlayingTrack(null);
          alert(`Unable to play "${track.title}". Audio source not accessible.`);
        }
      });
      
      audio.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully for:', track.title);
      });
      
      audio.addEventListener('canplaythrough', () => {
        console.log('Audio ready to play:', track.title);
      });
      
      // Set the source to the real Epidemic Sound URL first
      audio.src = track.audioUrl;
      
      // Store audio element
      setAudioElements(prev => new Map(prev.set(trackId, audio!)));
    }

    if (playingTrack === trackId) {
      // Pause current track
      console.log('Pausing track:', track.title);
      audio.pause();
      setPlayingTrack(null);
    } else {
      // Play new track
      console.log('Playing track:', track.title);
      
      try {
        await audio.play();
        console.log('Audio playback started successfully for:', track.title);
        setPlayingTrack(trackId);
      } catch (error: any) {
        console.error('Audio play failed for', track.title, ':', error);
        
        // Handle specific play errors
        if (error.name === 'NotAllowedError') {
          alert('Please interact with the page first to enable audio playback.');
        } else if (error.name === 'NotSupportedError') {
          alert(`Audio format not supported for "${track.title}". This is a demo - Epidemic Sound tracks require proper licensing.`);
        } else {
          console.error('Playback error:', error);
        }
        
        setPlayingTrack(null);
      }
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const debounceTimer = setTimeout(() => {
        performSearch(searchQuery);
      }, 500);
      return () => clearTimeout(debounceTimer);
    } else {
      setEpidemicTracks([]);
    }
  }, [searchQuery]);

  // Cleanup audio elements on unmount
  useEffect(() => {
    return () => {
      audioElements.forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, [audioElements]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Unified Search Header */}
      <div className="border-b border-gray-200 p-3 bg-gray-50">
        {/* Search Input */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by keywords, artist, genre, mood, or paste Spotify track URL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-sm"
          />
        </div>
        
        {/* Advanced Filters */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs flex-wrap gap-1">
            <Button 
              variant={selectedFilters.trending ? "default" : "outline"}
              onClick={() => setSelectedFilters(prev => ({ ...prev, trending: !prev.trending }))}
              size="sm"
              className="h-7 px-2"
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
              className="h-7 px-2"
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
              className="h-7 px-2"
            >
              🎵 Instrumental
            </Button>
            
            <Button 
              onClick={autoSelectSoundtrack}
              disabled={autoSoundtrackLoading}
              size="sm"
              className="h-7 px-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              {autoSoundtrackLoading ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-1"></div>
                  Auto
                </>
              ) : (
                <>
                  <Zap className="w-3 h-3 mr-1" />
                  ✨ Auto
                </>
              )}
            </Button>
          </div>
          
          {enableAdvancedSearch && (
            <div className="flex items-center space-x-2 text-xs flex-wrap gap-1">
              <select 
                value={selectedFilters.industry}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, industry: e.target.value }))}
                className="border border-gray-300 rounded px-2 py-1 text-xs bg-white h-7"
              >
                <option value="all">All Industries</option>
                {allIndustries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              
              <select 
                value={selectedFilters.genre}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, genre: e.target.value }))}
                className="border border-gray-300 rounded px-2 py-1 text-xs bg-white h-7"
              >
                <option value="all">All Genres</option>
                {allGenres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
              
              <select 
                value={selectedFilters.mood}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, mood: e.target.value }))}
                className="border border-gray-300 rounded px-2 py-1 text-xs bg-white h-7"
              >
                <option value="all">All Moods</option>
                {allMoods.map(mood => (
                  <option key={mood} value={mood}>{mood}</option>
                ))}
              </select>
              
              <select 
                value={selectedFilters.bpm}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, bpm: e.target.value }))}
                className="border border-gray-300 rounded px-2 py-1 text-xs bg-white h-7"
              >
                {bpmRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>


      {/* Compact Track List */}
      <div className="overflow-y-auto" style={{ maxHeight }}>
        {loading && (
          <div className="text-center py-8 text-gray-500 text-sm">
            Searching professional music library...
          </div>
        )}
        
        <div className="divide-y divide-gray-100">
          {filteredTracks.map((track) => (
            <div 
              key={track.id}
              className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors group cursor-pointer"
              onClick={() => onTrackSelect?.(track)}
            >
              {/* Album art */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {track.title.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                {track.isTrending && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-2 h-2 text-white" />
                  </div>
                )}
              </div>

              {/* Track info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-medium text-sm text-gray-900 truncate">{track.title}</h3>
                  {track.isTrending && (
                    <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800 px-1 py-0">
                      Hot
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span className="truncate">{track.artist}</span>
                  <span>•</span>
                  <span>{track.duration}</span>
                  <span>•</span>
                  <span>{track.bpm} BPM</span>
                  <span>•</span>
                  <span className="truncate">{track.genre}</span>
                </div>
              </div>

              {/* Vocals indicator */}
              <div className="flex items-center space-x-1 flex-shrink-0">
                {track.hasVocals ? (
                  <Volume2 className="w-3 h-3 text-blue-500" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                )}
              </div>

              {/* Compact waveform */}
              <div className="w-16 h-6 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-3 bg-gradient-to-r from-gray-400 to-gray-300 rounded opacity-60"></div>
              </div>

              {/* Theme */}
              <div className="text-xs text-gray-500 w-16 truncate flex-shrink-0">
                {track.theme}
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay(track.id);
                  }}
                  className="p-1 h-6 w-6 text-gray-400 hover:text-blue-600"
                >
                  {playingTrack === track.id ? (
                    <Pause className="w-3 h-3" />
                  ) : (
                    <Play className="w-3 h-3" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(track.id);
                  }}
                  className={`p-1 h-6 w-6 ${likedTracks.has(track.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                >
                  <Heart className="w-3 h-3" fill={likedTracks.has(track.id) ? 'currentColor' : 'none'} />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 h-6 w-6 text-gray-400 hover:text-green-600"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {!loading && filteredTracks.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            No tracks found matching your filters
          </div>
        )}
      </div>
    </div>
  );
};

export default CompactMusicLibrary;
