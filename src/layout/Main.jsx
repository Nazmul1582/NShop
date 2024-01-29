import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Category from "../components/Category";
import Cart from "../components/Cart";
import DeliveryInfo from "../components/DeliveryInfo";

const Main = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5F4F2] min-h-screen">
        <div className="container">
          <div className="sm:hidden">
            <DeliveryInfo />
          </div>
          <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[230px_1fr] lg:grid-cols-[230px_1fr_230px] xl:grid-cols-[230px_1fr_300px] gap-6 pt-10">
            <Category />
            <Outlet />
            <Cart />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
