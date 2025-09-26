import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import MobilePreview from "@/components/MobilePreview";
import SetUpMediaModal from "@/components/SetUpMediaModal";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [selectedFormat, setSelectedFormat] = useState("single");
  const [showMediaModal, setShowMediaModal] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 flex">
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-2xl">
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Name your ad" 
                className="w-full text-sm text-gray-500 bg-transparent border-none outline-none"
              />
            </div>

            {/* Ad Format Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Ad Format</h2>
              
              <RadioGroup value={selectedFormat} onValueChange={setSelectedFormat}>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <RadioGroupItem value="single" id="single" className="mt-1" />
                    <div>
                      <Label htmlFor="single" className="font-medium">Single Image or Video</Label>
                      <p className="text-sm text-gray-600">A full-screen ad that shows after or in between content.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <RadioGroupItem value="story" id="story" />
                    <div>
                      <Label htmlFor="story" className="font-medium">Story Ad</Label>
                      <p className="text-sm text-gray-600">An ad showing a branded tile that opens into a collection of 1-10 images or videos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <RadioGroupItem value="collection" id="collection" />
                    <div>
                      <Label htmlFor="collection" className="font-medium">Collection Ad</Label>
                      <p className="text-sm text-gray-600">A single image or video ad with four tappable tiles to feature your products.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <RadioGroupItem value="ar" id="ar" />
                    <div>
                      <Label htmlFor="ar" className="font-medium">AR Ad</Label>
                      <p className="text-sm text-gray-600">Augmented Reality (AR) creative found in the camera carousel.</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Ad Creatives Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Ad Creatives</h2>
                <button className="text-blue-600 text-sm hover:underline">
                  See Creative Tips
                </button>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-3">Creative Assets</h3>
                
                <div className="border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-gray-500 opacity-50" style={{clipPath: 'polygon(0 0, 100% 50%, 0 100%)'}} />
                      </div>
                      <span className="font-medium">Image / Video</span>
                    </div>
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Media File</h4>
                      <Button 
                        onClick={() => setShowMediaModal(true)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full"
                      >
                        📎 Set Up Media
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad Identity */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Ad Identity</h2>
              <div className="text-sm text-gray-600">
                Headline
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="px-6">Back</Button>
            </div>
          </div>
        </div>
        
        <div className="w-80 p-6 bg-white border-l border-gray-200 flex flex-col">
          <div className="mb-4">
            <h3 className="font-medium mb-2">Ad Preview</h3>
            <div className="mb-2">
              <label className="text-sm text-gray-600">Placement Preview</label>
              <select className="w-full mt-1 p-2 border border-gray-200 rounded text-sm">
                <option>Stories</option>
              </select>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <MobilePreview />
          </div>
        </div>
      </main>

      {showMediaModal && (
        <SetUpMediaModal onClose={() => setShowMediaModal(false)} />
      )}
    </div>
  );
};

export default Index;