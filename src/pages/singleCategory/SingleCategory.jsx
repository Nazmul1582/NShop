import { IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Product from "../../components/Product";
import { categories } from "../../utils/categories";

const SingleCategory = () => {
  const products = useProducts();
  const { categoryId } = useParams();

  const category = categories.find((item) => item.id === parseInt(categoryId));

  return (
    <div className="mb-20 -mt-8 lg:-mt-0">
      <div className="flex justify-between items-center my-8">
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            className="w-10 h-10"
            src={category.image}
            alt={category.categoryName}
          />
          <h2 className="text-base sm:text-2xl font-bold">{category.categoryName}</h2>
        </div>
        <button className="flex items-center gap-1 hover:bg-[#E7E6E4] px-3 py-2 rounded-xl duration-200">
          <span>All</span>
          <IoIosArrowForward />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products
          .filter((product) => product.category === category.categoryName)
          .map((item) => (
            <Product key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default SingleCategory;
