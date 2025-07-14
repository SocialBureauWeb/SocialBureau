import React from 'react';
import { useParams } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import servicesData from '../data/services';

const Service1 = () => {
  const { serviceTitle } = useParams();
  const decodedTitle = decodeURIComponent(serviceTitle);
  const data = servicesData[decodedTitle];

  if (!data) {
    return (
      <div className="text-white min-h-screen bg-black flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-lg text-gray-400">Please check the URL or select a valid service.</p>
      </div>
    );
  }

  const { meta, hero, problems, deliveries, whyItWorks, cta } = data;

  return (
    <div>
      <Navbar />
      <MetaTags title={meta.title} description={meta.description} />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center py-20 px-10 bg-black">
        <h1 style={{ fontFamily: "Playfair Display, serif" }} className="text-4xl md:text-6xl font-black text-white mb-4 lg:px-70 lg:pt-20">
          {hero.headline.split(hero.highlight).map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff0000]">{hero.highlight}</span>
              )}
            </React.Fragment>
          ))}
        </h1>
        <div className="flex items-center justify-center mb-2 py-2">
          <span className="block w-10 h-0.5 bg-[#ff0000]" />
        </div>
        <p className="max-w-4xl text-base sm:text-xl text-neutral-300 font-medium">{hero.subtext}</p>
      </div>

      {/* Problems Section */}
      <section className="bg-black text-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          {problems.title} <span className="text-[#ff0000]">{problems.highlight}</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {problems.items.map((problem, idx) => (
            <div key={idx} className="border border-zinc-700 rounded-xl p-6 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out hover:border-[#ff0000]">
              <div className="flex justify-center items-center mb-4 text-[#ff0000] text-3xl">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold">{problem.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Deliveries Section */}
      <section className="bg-black text-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          {deliveries.title} <span className="text-[#ff0000]">{deliveries.highlight}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {deliveries.items.map((item, idx) => (
            <div key={idx} className="group flex items-start gap-4 hover:bg-neutral-900 p-4 transition-all duration-300 rounded-lg hover:shadow-lg">
              <div className="bg-[#ff0000] p-2 rounded-md group-hover:scale-110 transition-transform">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-[#ff0000]">{item.title}</h3>
                <p className="text-md text-gray-400 group-hover:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {whyItWorks.title} <span className="text-[#ff0000]">{whyItWorks.highlight}</span>
        </h2>
        <p className="text-xl lg:text-2xl font-light text-gray-300 max-w-2xl mx-auto">{whyItWorks.subtext}</p>
      </section>

      {/* CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-black py-20 md:py-10 rounded-lg px-10 md:px-12 lg:px-40 gap-4 mt-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white text-center md:text-left">{cta.headline}</h2>
        <button onClick={() => window.open(cta.link, "_blank")} className="bg-[#ff0000] text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center">
          <img src="/assets/phone.webp" alt="phone" className="h-5 md:h-6 mr-2" />
          <span>{cta.button}</span>
        </button>
      </div>
          <Footer/>
    </div>
  );
};

export default Service1;
