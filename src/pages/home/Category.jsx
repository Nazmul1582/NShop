import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import { categories } from "../../utils/categories";
import { IoIosArrowForward } from "react-icons/io";

const Category = () => {
  return (
    <div>
      <div className="mb-2 font-medium cursor-pointer group">
        <h2 className="text-xl font-bold mb-6 hover:text-[#7a7a7a] transition duration-150">
          Delivery
        </h2>
        <div className="flex gap-2 items-center">
          <FaRegClock />
          <span>with 08:00</span>
        </div>
        <div className="flex gap-2 items-center">
          <FaRegClock />
          <span>free on first order 1 000 ₸</span>
        </div>
        <p>Service fee 149 ₸</p>
        <div className="flex items-center group-hover:text-red-500 duration-200">
          <p>About delivery</p>
          <div className="pt-[2px] group-hover:hidden">
            <IoIosArrowForward />
          </div>
          <div className="pt-[2px] text-sm hidden group-hover:block">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">Category</h2>
      <div className="flex flex-col">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-5 rounded-xl hover:bg-[#E7E6E4] p-1 cursor-pointer"
          >
            <img
              className="w-10 h-10"
              src={item.image}
              alt={item.categoryName}
            />
            <p>{item.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
