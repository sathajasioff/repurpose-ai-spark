
import { CheckCircle, Sparkles, Zap, Layers, BarChart, Palette, Globe, WifiIcon, Briefcase, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
      <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-5">
        <Icon className="h-6 w-6 text-brand-700" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default function Features() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Powerful Content Repurposing Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save hours of work and maximize your content's reach with our AI-powered tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Sparkles}
            title="AI-Powered Repurposing"
            description="Our state-of-the-art AI transforms your content while maintaining your unique voice and message."
          />
          <FeatureCard 
            icon={Layers}
            title="Multiple Output Formats"
            description="Generate Instagram carousels, TikTok scripts, tweet threads, LinkedIn posts, and more from a single source."
          />
          <FeatureCard 
            icon={Zap}
            title="Time-Saving Efficiency"
            description="What would take hours of manual work is done in seconds, freeing up your time for creating."
          />
          <FeatureCard 
            icon={Palette}
            title="Customizable Tone"
            description="Adjust the tone of your content to match your brand voice: professional, witty, motivational, and more."
          />
          <FeatureCard 
            icon={CheckCircle}
            title="Platform-Optimized"
            description="Each output is specifically formatted for maximum engagement on its target platform."
          />
          <FeatureCard 
            icon={BarChart}
            title="Content Analytics"
            description="Track your content performance and get insights to improve your repurposing strategy."
          />
          <FeatureCard 
            icon={Globe}
            title="Multi-Language Support"
            description="Translate and repurpose your content for international audiences with our language tools."
          />
          <FeatureCard 
            icon={WifiIcon}
            title="Content Library"
            description="Store all your repurposed content in one place for easy access and organization."
          />
          <FeatureCard 
            icon={Briefcase}
            title="Professional Templates"
            description="Access platform-specific templates designed for maximum engagement and impact."
          />
        </div>

        {/* Feature Highlight */}
        <div className="mt-24 bg-secondary/50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seamless Workflow Integration</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform is designed to fit perfectly into your content creation workflow, with integrations for popular tools and platforms.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Export Options</span>
                    <p className="text-muted-foreground mt-1">Download your content as text, markdown, or ready-to-use templates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Schedule Publishing</span>
                    <p className="text-muted-foreground mt-1">Connect to popular scheduling tools to plan your content calendar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Team Collaboration</span>
                    <p className="text-muted-foreground mt-1">Share and collaborate on repurposed content with your team</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              {/* This would be a screenshot or illustration in a real app */}
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Workflow Integration Preview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Highlight */}
        <div className="mt-24 bg-secondary/50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-background p-6 rounded-lg border border-border">
              {/* This would be a screenshot or illustration in a real app */}
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">AI Personalization Preview</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Advanced AI Personalization</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI learns from your content style and audience preferences to deliver increasingly personalized results over time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Style Matching</span>
                    <p className="text-muted-foreground mt-1">AI adapts to match your unique writing style and brand voice</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Engagement Optimization</span>
                    <p className="text-muted-foreground mt-1">Content is optimized based on what drives the most engagement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Custom Prompts</span>
                    <p className="text-muted-foreground mt-1">Create and save custom repurposing templates for your specific needs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
