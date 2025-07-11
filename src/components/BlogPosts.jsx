import React, { useState } from "react";

// Categories
const categories = [
  "All Posts",
  "Growth Engineering",
  "CRO Experiments",
  "Funnel Strategy",
  "Messaging Breakdowns",
  "Niche Market Trends",
];

// Posts data
const posts = [
  {
    id: 1,
    category: "CRO Experiments",
    title: "The Psychology Behind High-Converting Landing Pages: 7 Cognitive Triggers",
    excerpt:
      "Discover the psychological principles that drive conversions and how to implement them in your landing page design...",
    content:
      "Full content of The Psychology Behind High-Converting Landing Pages. Here you can add paragraphs, images, and detailed information about the topic.",
    author: "Sarah Chen",
    time: "5 min read",
    icon: "🎯",
  },
  {
    id: 2,
    category: "Funnel Strategy",
    title: "Multi-Touch Attribution: Why Your Current Model is Costing You Revenue",
    excerpt:
      "A comprehensive breakdown of attribution models and how choosing the wrong one can lead to misallocated budgets...",
    content:
      "Full content of Multi-Touch Attribution. Dive deep into attribution models and their impact on revenue allocation.",
    author: "Mike Rodriguez",
    time: "8 min read",
    icon: "🧮",
  },
  {
    id: 3,
    category: "Messaging Breakdowns",
    title: "Deconstructing Slack's Onboarding: What Makes Users Stick in Week 1",
    excerpt:
      "An in-depth analysis of Slack's user onboarding flow and the messaging strategies that create habit formation...",
    content:
      "Full content of Deconstructing Slack's Onboarding. Detailed analysis of onboarding strategies and examples.",
    author: "Alex Kim",
    time: "6 min read",
    icon: "💬",
  },
  {
    id: 4,
    category: "Growth Engineering",
    title: "Scaling with Microservices: Lessons from the Frontlines",
    excerpt:
      "Explore how leading tech companies leverage microservices architecture to drive growth and resilience...",
    content:
      "Full content of Scaling with Microservices. Insights from tech companies and practical recommendations.",
    author: "Emily Davis",
    time: "7 min read",
    icon: "⚙️",
  },
  {
    id: 5,
    category: "Niche Market Trends",
    title: "The Rise of Subscription Boxes: Profiting from Micro Niches",
    excerpt:
      "A deep dive into how subscription models are transforming niche product markets...",
    content:
      "Full content of The Rise of Subscription Boxes. Trends, examples, and case studies.",
    author: "David Lee",
    time: "4 min read",
    icon: "🧪",
  },
];

export default function BlogPosts() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [activePost, setActivePost] = useState(null);

  const filteredPosts =
    selectedCategory === "All Posts"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-black">
      {/* If a post is selected, show detailed view */}
      {activePost ? (
        <div className="bg-gradient-to-br from-black to-[#3f0000] rounded-xl p-8 shadow-xl border border-[#3f0000]">
  <button
    onClick={() => setActivePost(null)}
    className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors mb-6"
  >
    <i className="fas fa-arrow-left mr-2"></i>
    Back to Posts
  </button>

  <div className="flex items-center mb-3 space-x-3">
    <span className="text-xs font-medium bg-white text-red-600 px-3 py-1 rounded-full">
      {activePost.category}
    </span>
    <span className="text-xs text-white">{activePost.time}</span>
  </div>

  <h2 className="text-3xl text-white font-semibold  mb-4">
    {activePost.title}
  </h2>

  <p className="text-gray-400 leading-relaxed mb-6">
    {activePost.content}
  </p>

  <div className="flex items-center space-x-3">
    <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
      <i className="fa fa-user " aria-hidden="true"></i>
    </div>
    <span className="text-sm text-gray-400">{activePost.author}</span>
  </div>
</div>

      ) : (
        <>
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10 lg:px-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    selectedCategory === category
                      ? "bg-[#ff0000] text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg border shadow-sm overflow-hidden flex flex-col hover:border-red-500 hover:scale-105 transition"
              >
                <div
                  className={`h-1 bg-[#ff0000]`}
                ></div>
                <div className="p-5 flex-1 flex flex-col bg-black">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full mr-2">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.time}</span>
                  </div>
                  <h3 className="text-lg text-white font-semibold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2 ">
                      <i
                        className="fa fa-user bg-white p-1 rounded-full"
                        aria-hidden="true"
                      ></i>
                      <span className="text-xs text-gray-700">
                        {post.author}
                      </span>
                    </div>
                    <button
                      onClick={() => setActivePost(post)}
                      className="text-sm text-red-500 font-medium hover:scale-125"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}