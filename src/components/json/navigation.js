export const nav = [
  {
    name: "new arrivals",
    url: "/products",
    subItems: [
      { name: "Latest Collection", url: "/products?filter=latest" },
      { name: "Trending Now", url: "/products?filter=trending" },
      { name: "Best Sellers", url: "/products?filter=bestsellers" },
      { name: "Featured Items", url: "/products?filter=featured" }
    ]
  },
  {
    name: "jewelry",
    url: "/products",
    subItems: [
      { name: "Earrings", url: "/products?category=Earrings" },
      { name: "Rings", url: "/products?category=Rings" },
      { name: "Necklaces", url: "/products?category=Necklaces" },
      { name: "Bracelets", url: "/products?category=Bracelets" },
      { name: "Bangles", url: "/products?category=Bangles" },
    ]
  },
  {
    name: "occasions",
    url: "/products",
    subItems: [
      { name: "Wedding", url: "/products?occasion=wedding" },
      { name: "Cocktail Party", url: "/products?occasion=cocktail" },
      { name: "Sangeet", url: "/products?occasion=sangeet" },
      { name: "Bridesmaid", url: "/products?occasion=bridesmaid" },
      { name: "Mehendi", url: "/products?occasion=mehendi" },
      { name: "Reception", url: "/products?occasion=reception" },
    ]
  },
  {
    name: "collections",
    url: "/products",
    subItems: [
      { name: "Gold Collection", url: "/products?color=Gold" },
      { name: "Green Collection", url: "/products?color=Green" },
      { name: "Blue Collection", url: "/products?color=Blue" },
      { name: "Pink Collection", url: "/products?color=Pink" },
      { name: "Multi-Color", url: "/products?color=Multi-Color" },
    ]
  },
];
