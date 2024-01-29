import { Link } from "react-router-dom";
import { images } from "../../utils/images";
import { IoSearch } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="bg-[#F5F4F2] h-20">
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-6 justify-between py-3 border-b border-[#8a878466]">
          <div className="flex items-center gap-2">
            <Link className="" to="/">
              <img className="w-12 h-12" src={images.logo} alt="logo" />
            </Link>
            <div className="bg-black w-[2px] h-12"></div>
            <Link to="/">
              <img className="max-w-60 h-12" src={images.helios} alt="logo" />
            </Link>
          </div>

          <div className="flex justify-between gap-6">
            <div className="flex items-center gap-2 px-3 rounded-2xl border-2 border-[#8a878466]  bg-white">
              <IoSearch className="text-3xl text-gray-400" />
              <input
                className="py-3 outline-none border-none"
                type="text"
                placeholder="Find in Helios"
              />
            </div>

            <div className="flex items-center gap-2 px-3 rounded-2xl border-2 border-[#8a878466]  bg-white">
              <IoIosSend className="text-3xl" />
              <input
                className="py-3 outline-none border-none placeholder:text-black placeholder:font-semibold"
                type="text"
                placeholder="Enter delivery address"
              />
            </div>
          </div>

          <div className="justify-self-end">
            <button className="bg-[#E7E6E4] px-6 py-3 rounded-2xl font-semibold">
              Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
