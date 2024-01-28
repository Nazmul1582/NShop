const Product = () => {
  return (
    <div className="p-5 rounded-2xl bg-white shadow-lg">
      <img
        src="https://avatars.mds.yandex.net/get-eda/3569651/b272d3b5f10746dfb125abca442a78be/400x400nocrop"
        alt="product-photo"
      />
      <p className="text-3xl font-semibold">295 ₸</p>
      <p className="mt-1 mb-3">Vita sparkling water</p>
      <p className="text-[#9E9B98] text-md my-3">1 |</p>
      <button className="bg-[#F5F4F2] focus:bg-[#7A7A79] px-5 py-2 rounded-2xl font-semibold w-full text-2xl">
        +
      </button>
    </div>
  );
};

export default Product;
