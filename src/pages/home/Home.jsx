import Category from "./Category";
import Products from "./Products";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr_230px] gap-6 pt-10">
          <Category />
          <div className="mb-20">
            <Products />
          </div>
          <div className="bg-white font-bold rounded-2xl shadow-lg p-3">Cart</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
