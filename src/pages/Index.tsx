
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles, Instagram, Twitter, Linkedin, Youtube, Hash, FileText } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1 text-sm text-muted-foreground mb-6">
            <Sparkles className="mr-1 h-3 w-3 text-brand-500" />
            <span>AI-Powered Content Repurposing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transform One Piece of Content into <span className="gradient-text">Multiple Formats</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Repurpose your blog posts, videos, and podcasts into social media posts, threads, and more with the power of AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="font-medium">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="font-medium">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Turn One Piece of Content Into Many</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI understands your content and adapts it for different platforms and formats automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-5">
                <Instagram className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instagram Carousels</h3>
              <p className="text-muted-foreground">
                Transform your content into engaging 10-slide carousels with compelling hooks and visuals.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-5">
                <Youtube className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Scripts</h3>
              <p className="text-muted-foreground">
                Create engaging short-form video scripts for TikTok, YouTube Shorts, and Instagram Reels.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-5">
                <Twitter className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Twitter Threads</h3>
              <p className="text-muted-foreground">
                Transform your content into viral-worthy Twitter threads that drive engagement and follows.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-5">
                <Linkedin className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">LinkedIn Posts</h3>
              <p className="text-muted-foreground">
                Convert your content into professional LinkedIn posts that establish thought leadership.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-5">
                <FileText className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Blog Summaries</h3>
              <p className="text-muted-foreground">
                Create concise summaries of your long-form content for newsletters or quick consumption.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-5">
                <Hash className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hashtag Recommendations</h3>
              <p className="text-muted-foreground">
                Get platform-specific hashtag recommendations that increase your content's reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to repurpose your content across multiple platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-700 text-xl font-bold mb-5">1</div>
              <h3 className="text-xl font-semibold mb-3">Paste Your Content</h3>
              <p className="text-muted-foreground">
                Add your blog post, video script, or any long-form content to the dashboard.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-700 text-xl font-bold mb-5">2</div>
              <h3 className="text-xl font-semibold mb-3">Select Output Formats</h3>
              <p className="text-muted-foreground">
                Choose which platforms and content types you want to generate.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-700 text-xl font-bold mb-5">3</div>
              <h3 className="text-xl font-semibold mb-3">Get Your Results</h3>
              <p className="text-muted-foreground">
                Our AI transforms your content into platform-specific formats ready to publish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Preview */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Choose the plan that's right for your content needs
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
              <div className="text-brand-600 font-medium">Free Plan</div>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                  <span>5 content repurposing requests per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                  <span>Basic output formats</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                  <span>Copy and download results</span>
                </li>
              </ul>
              <Link to="/signup">
                <Button variant="outline" className="w-full">
                  Get Started Free
                </Button>
              </Link>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-sm border border-brand-200">
              <div className="text-brand-600 font-medium">Pro Plan</div>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                  <span>Unlimited content repurposing requests</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                  <span>All output formats</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                  <span>Save content to your library</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                  <span>Adjustable tone and style settings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link to="/signup">
                <Button className="w-full">
                  Upgrade to Pro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to maximize your content's reach?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of content creators who are saving time and growing their audience with our AI-powered repurposing tool.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="font-medium">
              Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
