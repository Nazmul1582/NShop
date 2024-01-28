import AppBtn from "./AppBtn";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { images } from "../../utils/images";
import { Link } from "react-router-dom";
import { footerBottomContent } from "../../utils/footerContent";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="pt-[106px] pb-20">
          <h2 className="text-2xl font-bold mb-6">Even easier in the app</h2>
          <div className="flex gap-2">
            <AppBtn icon={<FaApple />} text="App Store" />
            <AppBtn icon={<FaGooglePlay />} text="Play Store" />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-lg text-[#646464] mb-6">
            Company information
          </h2>
          <ul className="flex gap-5 flex-wrap mb-6">
            {footerBottomContent.map((item) => (
              <li key={item.id}>
                <Link
                  className="text-[13px] text-[#b8b8b8]"
                  to={`#${item.href}`}
                >
                  {item.textContent}
                </Link>
              </li>
            ))}
            <li className="flex gap-1 items-center">
              <img src={images.feedbackIcon} alt="feedback icon" />
              <p className="text-[13px] text-[#b8b8b8]">Feedback</p>
            </li>
          </ul>
          <div className="flex justify-between py-8 text-[13px] text-[#b8b8b8]">
            <p>© 2018–2024 Yandex Eats LLC</p>
            <div className="flex gap-1 items-center">
              <p>Project for Yandex</p>
              <img src={images.vk} alt="feedback icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
