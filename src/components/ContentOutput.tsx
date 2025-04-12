
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy, Download, BookmarkPlus } from "lucide-react";
import { toast } from "sonner";

type ContentResult = {
  format: string;
  title: string;
  content: string;
};

interface ContentOutputProps {
  results: ContentResult[];
}

const formatLabels: Record<string, string> = {
  instagram: "Instagram Carousel",
  tiktok: "TikTok/Shorts",
  twitter: "Twitter Thread",
  linkedin: "LinkedIn Post",
  blog: "Blog Summary",
  hashtags: "Hashtag Recommendations",
};

export default function ContentOutput({ results }: ContentOutputProps) {
  const [activeTab, setActiveTab] = useState(results[0]?.format || "");
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});

  const copyToClipboard = (content: string, format: string) => {
    navigator.clipboard.writeText(content);
    setCopiedMap({ ...copiedMap, [format]: true });
    toast.success("Copied to clipboard!");
    
    setTimeout(() => {
      setCopiedMap({ ...copiedMap, [format]: false });
    }, 2000);
  };

  const downloadAsText = (content: string, format: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${format}_content.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Downloaded successfully!");
  };

  const saveForLater = (format: string) => {
    // In a real app, we would save this to a database
    toast.success("Saved for later!");
  };

  if (results.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>No Results Yet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">Enter your content and press 'Repurpose Content' to see results here.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Repurposed Content</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start px-6 overflow-x-auto flex-nowrap">
            {results.map(result => (
              <TabsTrigger 
                key={result.format} 
                value={result.format} 
                className="whitespace-nowrap"
              >
                {formatLabels[result.format] || result.format}
              </TabsTrigger>
            ))}
          </TabsList>
          {results.map(result => (
            <TabsContent key={result.format} value={result.format} className="px-6 pb-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">{result.title}</h3>
                <div className="whitespace-pre-wrap bg-muted/50 p-4 rounded-md text-sm">
                  {result.content}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard(result.content, result.format)}
                  >
                    {copiedMap[result.format] ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => downloadAsText(result.content, result.format)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => saveForLater(result.format)}
                  >
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
