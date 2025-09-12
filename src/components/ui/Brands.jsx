import React from "react";
import Feedback from "./Feedback";

const features = [
  { icon: "/window.svg", title: "10+ Years", subtitle: "Legacy" },
  { icon: "/file.svg", title: "Trusted", subtitle: "Product" },
  { icon: "/window.svg", title: "Hassle Free", subtitle: "Replacement" },
  { icon: "/globe.svg", title: "Assured", subtitle: "Warranty" },
  { icon: "/next.svg", title: "Fast & Free", subtitle: "Delivery" },
  { icon: "/whatsapp.svg", title: "Quick", subtitle: "Support" },
];

const marketplaces = [
  { name: "Myntra", logo: "/assets/myntra.avif" },
  { name: "Flipkart", logo: "/assets/flipkart.avif" },
  { name: "Amazon", logo: "/assets/amazon.avif" },
  { name: "AJIO", logo: "/assets/ajio.webp" },
];

const Brands = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-6xl">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center gap-3"
          >
            <img src={item.icon} alt={item.title} className="w-10 h-10" />
            <div>
              <div className="text-xs text-gray-600">{item.title}</div>
              <div className="text-xs text-gray-600">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-2xl tracking-wide text-center text-black">
        LEADING BRAND ON MARKETPLACES
      </div>

      <div className="flex justify-center items-center gap-5">
        {marketplaces.map((m) => (
          <div
            key={m.name}
            className="rounded-xl flex items-center justify-center"
          >
            <img src={m.logo} alt={m.name} className="h-10 object-contain" />
          </div>
        ))}
      </div>
      <Feedback />
    </section>
  );
};

export default Brands;
