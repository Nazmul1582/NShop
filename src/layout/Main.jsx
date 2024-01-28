import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Main = () => {
    return (
        <>
        <Navbar />
        <main className="bg-[#F5F4F2]">
            <Outlet />
        </main>
        </>
    );
};

export default Main;