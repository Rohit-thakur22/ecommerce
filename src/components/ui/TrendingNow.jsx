import { trendingList } from "../json/products";
import ProductCard from "../products/Card";

const TrendingNow = () => {
  const data = trendingList;
  return (
    <div>
      <h2 className="text-xl uppercase md:text-2xl font-medium text-center text-black mb-12 tracking-wide">
        Trending Now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container mx-auto px-20">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} id={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
