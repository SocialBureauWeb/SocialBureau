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
  const [currentPage, setCurrentPage] = useState(0);

  const postsPerPage = 6;

  const filteredPosts =
    selectedCategory === "All Posts"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const resetPagination = () => setCurrentPage(0);

  return (
    <div className="bg-black bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-4 py-10 ">
        {/* Detailed post view */}
        {activePost ? (
          /* ... your full post view ... */
          <div>
            {/* BACK TO POSTS BUTTON */}
            <button onClick={() => setActivePost(null)} className="text-white mb-4">
              ← Back to Posts
            </button>
            {/* Post details */}
          </div>
        ) : (
          <>
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-10 lg:px-20">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    resetPagination();
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-[#ff0000] text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Posts List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg border shadow-sm overflow-hidden flex flex-col hover:border-red-500 hover:scale-105 transition"
                >
                  <div className="h-1 bg-[#ff0000]"></div>
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
                    <p className="text-sm text-gray-600 flex-1">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2 ">
                        <i className="fa fa-user bg-white p-1 rounded-full" aria-hidden="true"></i>
                        <span className="text-xs text-gray-700">{post.author}</span>
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

            {/* Pagination Controls */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-40"
              >
                ← Previous
              </button>
              <button
                onClick={goToNextPage}
                disabled={currentPage >= totalPages - 1}
                className="px-4 py-2 bg-[#ff0000] text-white rounded disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
