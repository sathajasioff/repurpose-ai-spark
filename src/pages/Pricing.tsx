
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your content creation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="text-brand-600 font-medium">Free Plan</div>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="mb-6 text-muted-foreground">
              Perfect for occasional content creators or those just getting started.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                <span>5 content repurposing requests per month</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                <span>Up to 1,000 words per request</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                <span>Instagram, TikTok, and Twitter formats</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                <span>Copy and download results</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                <span>Standard quality AI</span>
              </li>
            </ul>
            <Link to="/signup">
              <Button variant="outline" className="w-full">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-background rounded-lg p-8 shadow-sm border border-brand-200 relative">
            <div className="absolute -top-4 right-4 bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div className="text-brand-600 font-medium">Pro Plan</div>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="mb-6 text-muted-foreground">
              For serious content creators who need comprehensive repurposing capabilities.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                <span>Unlimited content repurposing requests</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                <span>Up to 5,000 words per request</span>
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
                <span>Premium quality AI</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 shrink-0 mt-0.5" />
                <span>Content history and analytics</span>
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

        {/* Enterprise */}
        <div className="mt-16 max-w-4xl mx-auto text-center bg-secondary/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-muted-foreground mb-6">
            We offer enterprise plans with advanced features, custom integrations, and dedicated support.
          </p>
          <Link to="/contact">
            <Button variant="outline">
              Contact Sales
            </Button>
          </Link>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-medium text-lg mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to Pro features until the end of your billing period.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">What forms of payment do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards (Visa, Mastercard, American Express) and PayPal.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">What AI models do you use?</h3>
              <p className="text-muted-foreground">
                We use the latest OpenAI models optimized specifically for content repurposing, with custom training for different social media platforms.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
