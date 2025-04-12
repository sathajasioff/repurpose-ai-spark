
import { useState } from "react";
import ContentInput from "@/components/ContentInput";
import ContentOutput from "@/components/ContentOutput";

// Mock AI-generated content
const generateMockResults = (content: string, formats: string[]) => {
  return formats.map(format => {
    let title = "";
    let generatedContent = "";
    
    switch (format) {
      case "instagram":
        title = "Instagram Carousel";
        generatedContent = "Slide 1: Hook - Did you know that most content creators are wasting 80% of their work?\n\nSlide 2: Problem - Creating quality content takes hours, but most people only see it once\n\nSlide 3: Solution - Repurposing lets you transform one piece of content into many\n\nSlide 4: Benefit - Reach 5x more people with the same amount of work\n\nSlide 5: Step 1 - Take your long-form content and identify key points\n\nSlide 6: Step 2 - Adapt each point for different platforms\n\nSlide 7: Step 3 - Add platform-specific elements like hashtags\n\nSlide 8: Step 4 - Schedule across platforms throughout the week\n\nSlide 9: Results - See your engagement grow across all channels\n\nSlide 10: CTA - Start repurposing today for maximum content ROI";
        break;
      case "tiktok":
        title = "TikTok/Shorts Script";
        generatedContent = "[Opening hook - direct to camera]\nDid you know that the average content creator is wasting 80% of their work? Let me show you why!\n\n[Quick cut]\nYou spend HOURS creating amazing blog posts or YouTube videos...\n\n[Show a time-lapse of writing/editing]\n...but most of your potential audience never sees them!\n\n[Transition effect]\nHere's the solution: Content repurposing.\n\n[Show examples on screen]\nTurn ONE piece of content into:\n- Social media carousels\n- Short-form videos\n- Tweet threads\n- LinkedIn posts\n\n[Energetic conclusion]\nMultiply your reach without multiplying your work!\n\n[Call to action]\nDouble your engagement with the content you ALREADY have. Save this video for later!";
        break;
      case "twitter":
        title = "Twitter Thread";
        generatedContent = "🧵 The Content Creator's Guide to Maximum ROI\n\nMost creators are leaving 80% of their potential reach on the table. Here's how to fix that with smart content repurposing:\n\n1/ Content creation takes time, but most of your audience only sees a fraction of your work. The average blog post reaches just 20% of your potential audience.\n\n2/ Smart repurposing lets you transform ONE piece of long-form content into MULTIPLE assets for different platforms. This means 5x the reach without 5x the work.\n\n3/ The key is understanding platform-specific formats:\n- Instagram loves visuals & carousels\n- TikTok needs hooks in the first 3 seconds\n- Twitter values concise insights\n- LinkedIn rewards professional perspectives\n\n4/ Start with your core content (blog/video) and extract the main points. Then adapt the format, tone, and presentation for each platform while keeping your message consistent.\n\n5/ Use AI tools to speed up the transformation process. You can generate platform-specific formats in seconds rather than hours of manual rewriting.\n\n6/ The results? One client saw their reach increase by 427% while actually creating LESS original content. It's about working smarter, not harder.\n\n7/ The most successful creators aren't creating more - they're strategically repurposing what they already have to maximize its impact across platforms.\n\n8/ Want to learn more about content repurposing strategies? Reply to this thread and I'll share my top resources!";
        break;
      case "linkedin":
        title = "LinkedIn Post";
        generatedContent = "I've noticed something troubling after working with 100+ content creators:\n\nMost are wasting 80% of their hard work. 😱\n\nHere's what's happening:\n\nCreators spend hours crafting perfect blog posts and videos, but then move straight to the next project without maximizing the value of what they've already created.\n\nThe solution? Strategic content repurposing.\n\nInstead of constantly creating new content, extract more value from your existing work by transforming it for different platforms:\n\n• Turn blog posts into slide decks for LinkedIn\n• Extract key points for Twitter threads\n• Create snippet videos for TikTok/Reels\n• Design quote graphics for Instagram\n\nOne of my clients implemented this strategy and saw a 327% increase in overall engagement while actually reducing their content creation time by 40%.\n\nThe most successful content creators aren't necessarily producing more - they're strategically repackaging their best ideas for different audiences and platforms.\n\nWhat's your biggest challenge when it comes to content creation? I'd love to hear in the comments below.\n\n#ContentStrategy #DigitalMarketing #ContentCreation #ProductivityTips";
        break;
      case "blog":
        title = "Blog Summary";
        generatedContent = "Key Takeaways: Content Repurposing for Maximum ROI\n\nContent repurposing is the strategic practice of adapting existing content into new formats to reach wider audiences across different platforms. This summary highlights the core benefits and strategies of effective content repurposing.\n\nCore Benefits:\n• Maximizes the ROI of your content creation efforts\n• Reaches audiences who prefer different content formats\n• Reinforces your message through multiple touchpoints\n• Saves time compared to creating entirely new content\n• Improves SEO through consistent messaging across platforms\n\nEffective Repurposing Strategies:\n1. Platform-Specific Adaptation: Tailor content to match the format, tone, and audience expectations of each platform\n2. Format Transformation: Convert long-form content into visuals, audio, video, and text snippets\n3. Message Consistency: Maintain core messaging while adapting presentation\n4. Strategic Distribution: Time releases across platforms to maximize visibility\n\nImplementation Steps:\n1. Audit existing content to identify high-performing pieces\n2. Extract key points and insights from original content\n3. Determine which platforms will benefit your business goals\n4. Create platform-optimized versions of your content\n5. Track performance to identify which formats drive the most engagement\n\nBy implementing these content repurposing strategies, creators can significantly extend their reach while reducing the time spent on content creation.";
        break;
      case "hashtags":
        title = "Hashtag Recommendations";
        generatedContent = "Primary Hashtags (High Volume):\n#ContentCreation\n#ContentMarketing\n#DigitalMarketing\n#ContentStrategy\n#SocialMediaTips\n\nNiche-Specific Hashtags (Medium Volume):\n#ContentRepurposing\n#RepurposedContent\n#ContentROI\n#ContentEfficiency\n#CrossPlatformContent\n\nTrending Hashtags (Check Relevance):\n#CreatorEconomy\n#ContentCreatorTips\n#GrowthHacking\n#ContentOptimization\n\nPlatform-Specific Hashtags:\n\nInstagram:\n#IGCarousel\n#CarouselPost\n#ContentCreatorLife\n#MarketingStrategy\n#GrowthTips\n\nTikTok:\n#CreatorTips\n#ContentTok\n#MarketingTok\n#CreatorAdvice\n#ContentStrategy\n\nTwitter:\n#ThreadTips\n#ContentThread\n#MarketingTwitter\n#DigitalStrategyTips\n\nLinkedIn:\n#LinkedInTips\n#ProfessionalContent\n#B2BContent\n#ThoughtLeadership\n#ContentROI";
        break;
      default:
        title = "Generated Content";
        generatedContent = "Sample content for " + format;
    }
    
    return {
      format,
      title,
      content: generatedContent
    };
  });
};

export default function Dashboard() {
  const [results, setResults] = useState<any[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleSubmit = (content: string, formats: string[]) => {
    const generatedResults = generateMockResults(content, formats);
    setResults(generatedResults);
    setHasGenerated(true);
  };

  return (
    <div className="container max-w-6xl py-8">
      <h1 className="text-3xl font-bold mb-8">Content Repurposing Dashboard</h1>
      <div className="space-y-8">
        <ContentInput onSubmit={handleSubmit} />
        {hasGenerated && <ContentOutput results={results} />}
      </div>
    </div>
  );
}
