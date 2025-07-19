import React, { useEffect, useState, useRef } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
export default function CaseStudyCards() {
  const caseStudies = [
    {
      category: "Luxury Timepieces",
      title: "Chronos Heritage",
      bottleneck:
        "Premium Swiss watchmaker struggling with 43% cart abandonment rate and declining customer lifetime value. Their traditional marketing approached luxury consumers with generic messaging, failing to communicate the heritage and craftsmanship that justified their premium pricing.",
      whatWeDid:
        "Implemented a storytelling-driven conversion optimization strategy with personalized product narratives, artisan video testimonials, and a premium consultation booking system. Redesigned the purchase journey to emphasize exclusivity and craftsmanship over price.",
      outcomes: [
        { value: "67%", label: "CAC Reduction" },
        { value: "145%", label: "LTV Increase" },
        { value: "$2.0M", label: "MRR Growth" },
        { value: "89%", label: "Conversion Rate" }
      ],
      quarterlyData: {
  CAC: [120, 100, 90, 67],        // % or raw
  LTV: [100, 130, 180, 245],
  MRR: [0.8, 1.2, 1.6, 2.0],      // in millions
  Conversion: [65, 70, 78, 89]
},
      quote:
        "The transformation in our customer journey was remarkable. We went from selling watches to curating lifetime relationships with collectors who truly appreciate our heritage.",
      quoteAuthor: "Marcus Zimmermann, CEO, Chronos Heritage"
    },
    {
      category: "Fintech & Wealth",
      title: "Sovereign Capital",
      bottleneck:
        "Elite wealth management firm facing trust barriers with high-net-worth individuals. Despite superior returns, they struggled to communicate expertise and justify premium fees in a crowded market dominated by established legacy firms.",
      whatWeDid:
        "Developed an authority-based content ecosystem featuring market insights, exclusive economic analysis, and invitation-only webinar series. Created a sophisticated lead nurturing system that educated prospects while demonstrating deep market expertise.",
      outcomes: [
        { value: "52%", label: "CAC Reduction" },
        { value: "278%", label: "LTV Increase" },
        { value: "$18.0M", label: "MRR Growth" },
        { value: "94%", label: "Conversion Rate" }
      ],
      quarterlyData: {
  CAC: [120, 100, 90, 67],        // % or raw
  LTV: [100, 130, 180, 245],
  MRR: [0.8, 1.2, 1.6, 2.0],      // in millions
  Conversion: [65, 70, 78, 89]
},
      quote:
        "They didn't just improve our marketing, they elevated our entire brand positioning. We now attract the caliber of clients who truly value sophisticated wealth management.",
      quoteAuthor: "Sarah Chen, Managing Partner, Sovereign Capital"
    },
  ];
const labelToKey = {
  "CAC Reduction": "CAC",
  "LTV Increase": "LTV",
  "MRR Growth": "MRR",
  "Client Retention": "Retention",
  "Conversion Rate": "Conversion",
};

const prepareQuarterlyChartData = (values) =>
  ["Quater1", "Quater2", "Quater3", "Quater4"].map((q, i) => ({ quarter: q, value: values[i] }));

  const CountUpNumber = ({ end, duration = 1500 }) => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    const hasPercent = /%$/.test(end.trim());
    const hasDollar = /^\$/.test(end.trim());
    const hasM = /M$/.test(end.trim());
    const factor = hasM ? 1_000_000 : 1;
    const numericPart = parseFloat(end.replace(/[^0-9.]/g, ""));

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.6
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.disconnect();
      };
    }, []);

    useEffect(() => {
      if (!visible) return;

      let startTimestamp = null;

      function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * numericPart * factor);
        setValue(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }, [visible, numericPart, factor, duration]);

    let display = value.toLocaleString();
    if (hasM) display = `$${(value / 1_000_000).toFixed(1)}M`;
    else if (hasPercent) display = `${value}%`;
    else if (hasDollar) display = `$${display}`;

    return (
      <span ref={ref}>
        {display}
      </span>
    );
  };

  return (
    <main className="bg-black min-h-screen p-4 sm:p-2 flex flex-col gap-20 bg-[url('/assets/bg.webp')] bg-cover bg-center bg-fixed overflow-y-auto">
  {caseStudies.map((cs, index) => (
    <section
      key={index}
      className="relative p-5 transition duration-300 border border-neutral-800 hover:border-red-600 hover:scale-105 rounded-lg bg-black shadow-sm mx-[5vw] lg:mx-[20vw] sm:p-10 hover:shadow-[0_0_20px_2px_rgba(239,68,68,0.5)] before:content-[''] before:absolute before:top-0 before:left-0 before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 hover:before:scale-x-100"
    >
          <div className="flex flex-col gap-4 mb-6">
            <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest w-40">
              {cs.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {cs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="flex items-center text-red-600 font-semibold text-lg mb-2">
                The Bottleneck
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                {cs.bottleneck}
              </p>
            </div>
            <div>
              <h3 className="flex items-center text-red-600 font-semibold text-lg mb-2">
                What We Did
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                {cs.whatWeDid}
              </p>
            </div>
          </div>

          <div>
  <h3 className="flex items-center text-red-600 font-semibold text-lg mb-4">
    The Outcome
  </h3>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
    {cs.outcomes.map((item, idx) => {
      const key = labelToKey[item.label];
      const chartData = cs.quarterlyData?.[key]
        ? prepareQuarterlyChartData(cs.quarterlyData[key])
        : null;

      return (
        <div
          key={idx}
          className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col gap-2"
        >
          <div className="text-2xl sm:text-3xl font-bold text-red-600">
            <CountUpNumber end={item.value} />
          </div>
          <div className="text-sm text-neutral-600">{item.label}</div>

          {chartData && (
            <div className="h-24 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="quarter" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>


          <blockquote className="border-l-4 border-red-600 pl-4 italic text-neutral-400 text-base">
            "{cs.quote}"
            <footer className="not-italic font-bold mt-2 text-sm text-neutral-200">
              — {cs.quoteAuthor}
            </footer>
          </blockquote>
        </section>
      ))}
    </main>
  );
}
