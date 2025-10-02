import { useState } from "react";
import { X, Search, Filter, Upload, Play, Pause, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import CompactMusicLibrary from "./CompactMusicLibrary";

interface SetUpMediaModalProps {
  onClose: () => void;
}

const SetUpMediaModal = ({ onClose }: SetUpMediaModalProps) => {
  const [activeTab, setActiveTab] = useState("select");
  const [selectedMusic, setSelectedMusic] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    console.log("Starting upload for:", file.name);
    setUploadedFile(file);
    setIsUploading(true);
    setUploadProgress(0);

    // Create preview URL for the file
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setIsUploading(false);
          console.log("Upload completed for:", file.name);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // In a real implementation, you would upload to your server here
    // Example:
    // const formData = new FormData();
    // formData.append('file', file);
    // const response = await fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData
    // });
  };

  const resetUpload = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    setIsUploading(false);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

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

                <div className="flex justify-center">
                  {/* Upload Area - Centered */}
                  <div className="w-80">
                    {!uploadedFile ? (
                      <div className="relative bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg aspect-square flex flex-col items-center justify-center hover:border-gray-400 hover:bg-gray-100 transition-colors cursor-pointer group">
                        <input 
                          type="file" 
                          accept="image/*,video/*" 
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              console.log("File selected:", file.name);
                              handleFileUpload(file);
                            }
                          }}
                        />
                        <div className="text-center">
                          <Upload className="w-16 h-16 text-gray-400 group-hover:text-gray-600 mx-auto mb-6" />
                          <p className="text-xl font-medium text-gray-600 group-hover:text-gray-800 mb-3">
                            Upload Creative
                          </p>
                          <p className="text-base text-gray-500 mb-6">
                            Drag & drop or click to browse
                          </p>
                          <p className="text-sm text-gray-400">
                            Supports: JPG, PNG, MP4, MOV<br />
                            Max size: 100MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative bg-gray-100 rounded-lg aspect-square overflow-hidden">
                        {/* Preview */}
                        {previewUrl && (
                          <>
                            {uploadedFile.type.startsWith('video/') ? (
                              <video 
                                src={previewUrl} 
                                className="w-full h-full object-cover"
                                controls
                                muted
                              />
                            ) : (
                              <img 
                                src={previewUrl} 
                                alt="Uploaded content"
                                className="w-full h-full object-cover"
                              />
                            )}
                          </>
                        )}

                        {/* Upload Progress Overlay */}
                        {isUploading && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                            <div className="bg-white rounded-lg p-6 max-w-xs w-full mx-4">
                              <div className="text-center mb-4">
                                <Upload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                <p className="font-medium">Uploading...</p>
                                <p className="text-sm text-gray-500">{uploadedFile.name}</p>
                              </div>
                              <Progress value={uploadProgress} className="mb-2" />
                              <p className="text-xs text-gray-500 text-center">{uploadProgress}% complete</p>
                            </div>
                          </div>
                        )}

                        {/* Success State */}
                        {!isUploading && uploadProgress === 100 && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                        )}

                        {/* File Info */}
                        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                          {uploadedFile.name}
                        </div>

                        {/* Replace Button */}
                        <div className="absolute top-2 left-2">
                          <Button 
                            size="sm" 
                            variant="secondary"
                            onClick={resetUpload}
                            className="text-xs"
                          >
                            Replace
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sound" className="mt-0">
                <div className="mb-6">
                  {/* Unified Music Library */}
                  <div className="w-full mb-6">
                    <CompactMusicLibrary 
                      maxHeight="350px"
                      onTrackSelect={(track) => {
                        console.log("Selected track:", track);
                        setSelectedMusic(track.id);
                      }}
                      enableAdvancedSearch={true}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    You can replace the original audio or adjust it and add music on top. Music is added from the start of the track you choose. The music you add can only be used on Snapchat.
                  </p>
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