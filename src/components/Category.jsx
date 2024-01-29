import { categories } from "../utils/categories";
import { Link } from "react-router-dom";
import DeliveryInfo from "./DeliveryInfo";

const Category = () => {
  return (
    <div className="mb-20">
      <div className="hidden sm:block">
      <DeliveryInfo />
      </div>
      <h2 className="text-base sm:text-xl font-bold mb-6">Category</h2>
      <div className="flex flex-col">
        {categories.map((item) => (
          <Link key={item.id} to={`/category/${item.id}`}>
            <div className="flex items-center gap-5 rounded-xl hover:bg-[#E7E6E4] p-1 cursor-pointer">
              <img
                className="w-10 h-10"
                src={item.image}
                alt={item.categoryName}
              />
              <p className="hidden sm:block">{item.categoryName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
