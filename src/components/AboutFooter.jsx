import React from "react";

export default function AboutFooter() {
  return (
    <section className="max-w-xl mx-auto py-20 px-10 pb-30">
      <h1 className="text-3xl font-bold mb-3">
        Let’s Build a System That Wins.
      </h1>
      <p className="mb-7 text-base">
        Join us in creating a winning marketing ecosystem tailored to your unique business needs.
      </p>
      <div className="flex gap-3">
        <a
          href="#meet-the-team"
          className="bg-black text-white border font-medium px-6 py-2 sm:px-4 rounded-sm transition-colors hover:bg-[#ff0000]"
        >
          Meet the Team
        </a>
        <a
          href="#schedule-discovery"
          className="bg-white text-black font-medium px-6 py-2 sm:px-4 rounded-sm border-2 border-gray-300 transition-colors hover:border-[#ff0000] hover:text-[#ff0000]"
        >
          Schedule a Discovery Call
        </a>
      </div>
    </section>
  );
}