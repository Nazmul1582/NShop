import { IoIosArrowForward } from "react-icons/io";
import { images } from "../../utils/images";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";
import { categories } from "../../utils/categories";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {/* {
            products.map(product => ())
        } */}
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <div className="flex justify-between items-center my-8">
              <div className="flex items-center gap-3 cursor-pointer">
                <img
                  className="w-10 h-10"
                  src={category.image}
                  alt={category.categoryName}
                />
                <h2 className="text-2xl font-bold">{category.categoryName}</h2>
              </div>
              <button className="flex items-center gap-1 hover:bg-[#E7E6E4] px-3 py-2 rounded-xl duration-200">
                <span>All</span>
                <IoIosArrowForward />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {
                products.filter(product => product.category === category.categoryName).map(item => (
                    <Product key={item.id} item = {item} />
                    // console.log(item)
                ))
              }
              {/* <Link to="">
                <Product />
              </Link>
              <Link to="">
                <Product />
              </Link>
              <Link to="">
                <Product />
              </Link>
              <Link to="">
                <Product />
              </Link>
              <Link to="">
                <Product />
              </Link>
              <Link to="">
                <Product />
              </Link> */}
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer mb-5">
            <img className="w-10 h-10" src={images.category1} alt="category" />
            <h2 className="text-2xl font-bold">Cold drinks</h2>
          </div>
          <button className="flex items-center gap-1 hover:bg-[#E7E6E4] px-3 py-2 rounded-xl duration-200">
            <span>All</span>
            <IoIosArrowForward />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer mb-5">
            <img className="w-10 h-10" src={images.category1} alt="category" />
            <h2 className="text-2xl font-bold">Cold drinks</h2>
          </div>
          <button className="flex items-center gap-1 hover:bg-[#E7E6E4] px-3 py-2 rounded-xl duration-200">
            <span>All</span>
            <IoIosArrowForward />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
          <Link to="">
            <Product />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Products;