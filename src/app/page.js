import {
  jewelryCategories,
  occaionCategories,
} from "@/components/json/categories";
import { customersList } from "@/components/json/customers";
import BannerImage from "@/components/ui/BannerImage";
import BestSellers from "@/components/ui/BestSellers";
import CategoryExplorer from "@/components/ui/CategoryExplorer";
import CustomersSlider from "@/components/ui/CustomersSlider";
import Slider from "@/components/ui/Slider";
import Brands from "@/components/ui/Brands";

export default function Home() {
  return (
    <div className="space-y-10 flex flex-col">
      <Slider />
      <CategoryExplorer categories={jewelryCategories} />
      <BannerImage />
      <CategoryExplorer
        categories={occaionCategories}
        title="Shop By Occasion"
      />
      <BestSellers />
      <CustomersSlider sliderData={customersList} />
      <Brands />
    </div>
  );
}
