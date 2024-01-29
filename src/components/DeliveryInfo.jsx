import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const DeliveryInfo = () => {
  return (
    <div className="mb-2 font-medium cursor-pointer group">
      <h2 className="text-base sm:text-xl font-bold mb-6 hover:text-[#7a7a7a] transition duration-150">
        Delivery
      </h2>
      <div className="flex gap-2 items-center">
        <FaRegClock />
        <span>with 08:00</span>
      </div>
      <div className="flex gap-2 items-center">
        <FaRegClock />
        <span>free on first order 1000 ₸</span>
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
  );
};

export default DeliveryInfo;
