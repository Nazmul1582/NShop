import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Main = () => {
    return (
        <>
        <Navbar />
        <main className="bg-[#F5F4F2] min-h-screen">
            <Outlet />
        </main>
        <Footer />
        </>
    );
};

export default Main;