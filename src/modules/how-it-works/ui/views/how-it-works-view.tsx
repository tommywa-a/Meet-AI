"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Bot,
  Users,
  Clock,
  Video,
  Sparkles,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Custom AI Personalities",
    description:
      "Create AI agents with unique personalities, expertise, and communication styles tailored to your needs.",
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "AI Video Calls",
    description:
      "Engage in natural, face-to-face video conversations with your AI agents anytime, anywhere.",
  },
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: "Multiple Agents",
    description:
      "Create and manage multiple AI agents, each with their own distinct personality and purpose.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Endless Possibilities",
    description:
      "From personal coaching to language practice, your AI agents are ready for any scenario.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Your AI Agent",
    description:
      "Design your AI's personality, expertise, and communication style with our intuitive interface.",
  },
  {
    number: "02",
    title: "Start a Video Call",
    description:
      "Initiate a video call with your AI agent instantly, no scheduling required.",
  },
  {
    number: "03",
    title: "Engage & Learn",
    description:
      "Have natural, engaging conversations and get personalized assistance on demand.",
  },
];

export const HowItWorksView = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              AI Agents, Real Conversations
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Create custom AI personalities and have natural video
              conversations on demand. Perfect for coaching, practice, or just
              having an intelligent chat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/sign-up">Get Started - It&apos;s Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need for Smarter Meetings
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our AI meeting assistant is packed with powerful features to make
              your meetings more productive and efficient.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="h-full transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="scroll-mt-24 py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Getting started with our AI meeting assistant is simple and
              straightforward.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-primary/5 p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Why Choose Our AI Agents?
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                  {[
                    {
                      icon: <Clock className="h-6 w-6 text-primary" />,
                      title: "Available 24/7",
                      description:
                        "Your AI agents are always ready for a conversation, day or night.",
                    },
                    {
                      icon: <Users className="h-6 w-6 text-primary" />,
                      title: "Multiple Use Cases",
                      description:
                        "Perfect for coaching, language practice, interview prep, or just friendly chats.",
                    },
                    {
                      icon: <Sparkles className="h-6 w-6 text-primary" />,
                      title: "Endlessly Customizable",
                      description:
                        "Tailor each AI's knowledge, personality, and responses to your exact needs.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        {benefit.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Button size="lg" asChild>
                    <Link href="/sign-up">Start Your Free Trial</Link>
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-primary px-6 py-16 text-center sm:p-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Meet Your AI Companion?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Join thousands of users who are already having meaningful conversations with their AI agents.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/sign-up">Create Your AI Agent</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
                asChild
              >
                {/* <Link href="#">Schedule a Demo</Link> */}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
