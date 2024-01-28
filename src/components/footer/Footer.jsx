import AppBtn from "./AppBtn";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

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
      </div>
    </footer>
  );
};

export default Footer;
