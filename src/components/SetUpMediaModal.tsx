import { useState } from "react";
import { X, Search, Filter, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface SetUpMediaModalProps {
  onClose: () => void;
}

const SetUpMediaModal = ({ onClose }: SetUpMediaModalProps) => {
  const [activeTab, setActiveTab] = useState("select");
  const [selectedMusic, setSelectedMusic] = useState("");
  const [originalVolume, setOriginalVolume] = useState([50]);
  const [musicVolume, setMusicVolume] = useState([50]);

  const musicTracks = [
    { id: "edm10", name: "EDM 10", color: "bg-purple-500" },
    { id: "pop15", name: "Pop 15", color: "bg-pink-500" },
    { id: "hiphop3", name: "Hip Hop 3", color: "bg-blue-500" },
    { id: "pop9", name: "Pop 9", color: "bg-pink-400" },
    { id: "hiphop17", name: "Hip Hop 17", color: "bg-blue-400" },
    { id: "pop6", name: "Pop 6", color: "bg-pink-400" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[600px] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Set up your media</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-4 bg-gray-50 rounded-none border-b border-gray-200 h-12">
            <TabsTrigger 
              value="select" 
              className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none h-full"
            >
              Select Media
            </TabsTrigger>
            <TabsTrigger 
              value="crop" 
              className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none h-full"
            >
              Crop Media
            </TabsTrigger>
            <TabsTrigger 
              value="template" 
              className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none h-full"
            >
              Template & Caption
            </TabsTrigger>
            <TabsTrigger 
              value="sound" 
              className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none h-full"
            >
              Sound
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 flex">
            <div className="flex-1 p-6">
              <TabsContent value="select" className="mt-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search media ..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64"
                      />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filter
                    </Button>
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Media
                  </Button>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">September 26, 2025</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative bg-gray-100 rounded-lg aspect-video overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Waterfall video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                      00:00:54
                    </div>
                    <div className="absolute bottom-2 left-2 text-white text-xs">
                      7297870-<br />
                      hd_1080_1920_3<br />
                      0fps.mp4
                    </div>
                  </div>
                  <div className="relative bg-gray-100 rounded-lg aspect-video overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Waterfall video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                      00:00:54
                    </div>
                    <div className="absolute bottom-2 left-2 text-white text-xs">
                      7297870-<br />
                      hd_1080_1920_3<br />
                      0fps.mp4
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sound" className="mt-0">
                <div className="mb-6">
                  <div className="relative mb-4">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search music tracks"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">
                    You can replace the original audio or adjust it and add music on top. Music is added from the start of the track you choose. The music you add can only be used on Snapchat.
                  </p>

                  <div className="mb-6">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      Volume Options
                      <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs">?</div>
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-8 mb-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Original</span>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                          </div>
                        </div>
                        <Slider
                          value={originalVolume}
                          onValueChange={setOriginalVolume}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Music</span>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                          </div>
                        </div>
                        <Slider
                          value={musicVolume}
                          onValueChange={setMusicVolume}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <RadioGroup value={selectedMusic} onValueChange={setSelectedMusic}>
                    <div className="grid grid-cols-2 gap-4">
                      {musicTracks.map((track) => (
                        <div key={track.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={track.id} id={track.id} />
                            <div className={`w-12 h-12 ${track.color} rounded-lg flex items-center justify-center`}>
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <Label htmlFor={track.id} className="font-medium cursor-pointer">
                                {track.name}
                              </Label>
                              <Button variant="outline" size="sm" className="ml-auto">
                                Play Sample
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </TabsContent>

              <TabsContent value="crop" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-gray-500">Crop functionality would be implemented here</p>
                </div>
              </TabsContent>

              <TabsContent value="template" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-gray-500">Template & Caption functionality would be implemented here</p>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>

        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetUpMediaModal;