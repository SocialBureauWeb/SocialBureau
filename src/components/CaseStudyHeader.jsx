import React from "react";

export default function CaseStudyHeader() {
  return (
    <section className="bg-black text-center py-50 px-4">
      <h5
        className="text-red-500 uppercase tracking-widest mb-4 text-md font-semibold"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Case Studies
      </h5>
      <h2
        className="text-white text-7xl md:text-8xl font-bold mb-6"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Proof, Not Promises
      </h2>
      <p
        className="text-neutral-300 text-base md:text-xl max-w-2xl mx-auto"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        We partner with niche brands who expect more than impressions. Explore how we've engineered real growth.
      </p>
    </section>
  );
}
