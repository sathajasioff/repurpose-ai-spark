
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Sparkles } from "lucide-react";

type OutputFormat = {
  id: string;
  label: string;
  description: string;
  selected: boolean;
};

export default function ContentInput({ onSubmit }: { onSubmit: (content: string, formats: string[]) => void }) {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [outputFormats, setOutputFormats] = useState<OutputFormat[]>([
    { 
      id: "instagram", 
      label: "Instagram Carousel", 
      description: "10 slides with hooks", 
      selected: true 
    },
    { 
      id: "tiktok", 
      label: "TikTok/Shorts", 
      description: "60 second script", 
      selected: true 
    },
    { 
      id: "twitter", 
      label: "Twitter Thread", 
      description: "8-tweet format", 
      selected: true 
    },
    { 
      id: "linkedin", 
      label: "LinkedIn Post", 
      description: "Professional format", 
      selected: true 
    },
    { 
      id: "blog", 
      label: "Blog Summary", 
      description: "Concise overview", 
      selected: true 
    },
    { 
      id: "hashtags", 
      label: "Hashtag Recommendations", 
      description: "Relevant tags", 
      selected: true 
    },
  ]);

  const toggleFormat = (id: string) => {
    setOutputFormats(outputFormats.map(format => 
      format.id === id ? { ...format, selected: !format.selected } : format
    ));
  };

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    const selectedFormats = outputFormats
      .filter(format => format.selected)
      .map(format => format.id);
      
    if (selectedFormats.length === 0) return;
    
    setIsLoading(true);
    
    // In a real app, we would call an API here
    setTimeout(() => {
      onSubmit(content, selectedFormats);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Repurpose Your Content</CardTitle>
        <CardDescription>
          Paste your blog post or video script below, select output formats, and let AI do the rest
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="content" className="text-sm font-medium">
            Your Content
          </label>
          <Textarea
            id="content"
            placeholder="Paste your long-form content here (minimum 200 words for best results)..."
            className="h-64 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Output Formats</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {outputFormats.map(format => (
              <button
                key={format.id}
                onClick={() => toggleFormat(format.id)}
                className={`flex items-start p-3 border rounded-md transition-all ${
                  format.selected 
                    ? "border-brand-500 bg-brand-50 dark:bg-brand-950/20" 
                    : "border-border bg-background"
                }`}
              >
                <div className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                  {format.selected ? (
                    <CheckCircle2 className="h-5 w-5 text-brand-600" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border border-muted-foreground" />
                  )}
                </div>
                <div className="text-left">
                  <div className="font-medium">{format.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{format.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubmit} 
          disabled={!content.trim() || isLoading || !outputFormats.some(f => f.selected)}
          className="w-full"
        >
          {isLoading ? (
            <>
              <span className="animate-spin mr-2">●</span>
              Generating Content...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Repurpose Content
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
