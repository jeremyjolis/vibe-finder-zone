import { useState } from "react";
import { CheckCircle2, Circle, Volume2 } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import MobilePreview from "@/components/MobilePreview";
import MusicLibrary from "@/components/MusicLibrary";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [originalVolume, setOriginalVolume] = useState([50]);
  const [musicVolume, setMusicVolume] = useState([50]);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 flex">
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Set up your media</h1>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Select Media</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Crop Media</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Template & Caption</span>
              </div>
            </div>

            {/* Sound Section */}
            <div className="bg-card rounded-lg border border-border p-6 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                  ♫
                </div>
                <h2 className="text-xl font-semibold">Sound</h2>
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-4">
                  You can replace the original audio or adjust it and add music on top. 
                  Music is added from the start of the track you choose. The music you add can only be used on Snapchat.
                </p>
                
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  Volume Options
                  <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center text-xs">?</div>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Original</span>
                      <span className="text-sm text-muted-foreground">{originalVolume[0]}%</span>
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
                      <span className="text-sm text-muted-foreground">{musicVolume[0]}%</span>
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

              <MusicLibrary />
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90">Done</Button>
            </div>
          </div>
        </div>
        
        <div className="w-96 p-8 bg-muted/20 border-l border-border flex items-center justify-center">
          <MobilePreview />
        </div>
      </main>
    </div>
  );
};

export default Index;