import { Link } from "react-router-dom";
import { images } from "../../utils/images";
import { IoSearch } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <header className="bg-[#F5F4F2] h-20">
      <div className="container">
        <div className="grid grid-cols-[200px_1fr_125px] lg:grid-cols-[1fr_2fr_1fr] gap-4 lg:gap-6 justify-between py-3 border-b border-[#8a878466]">
          <div className="flex items-center gap-2">
            <Link className="" to="/">
              <img className="w-12 h-12" src={images.logo} alt="logo" />
            </Link>
            <div className="bg-black w-[2px] h-12"></div>
            <Link to="/">
              <img className="max-w-32 lg:max-w-60 w-full h-12" src={images.helios} alt="logo" />
            </Link>
          </div>

          <div className="flex justify-center gap-3 lg:gap-6">
            <div className="flex items-center gap-2 px-3 rounded-2xl border-2 border-[#8a878466]  bg-white">
              <IoSearch className="text-xl lg:text-3xl text-gray-400" />
              <input
                className="py-2 lg:py-3 outline-none border-none w-28 lg:w-full placeholder:lg:text-base placeholder:text-xs"
                type="text"
                placeholder="Find in Helios"
              />
            </div>

            <div className="flex items-center gap-2 px-3 rounded-2xl border-2 border-[#8a878466]  bg-white">
              <IoIosSend className="text-xl lg:text-3xl" />
              <input
                className="py-2 lg:py-3 outline-none border-none placeholder:text-black placeholder:font-semibold placeholder:lg:text-base placeholder:text-xs w-28 lg:w-full"
                type="text"
                placeholder="Enter delivery address"
              />
            </div>
          </div>

          <div className="justify-self-end flex items-center gap-2">
          <span className="text-3xl lg:hidden"><IoCartOutline /></span>
            <button className="bg-[#E7E6E4] px-4 py-2 lg:px-6 lg:py-3 rounded-2xl font-semibold">
              Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
