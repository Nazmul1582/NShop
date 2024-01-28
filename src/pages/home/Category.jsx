import { categories } from "../../utils/categories";

const Category = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-6">Category</h2>
            <div className="flex flex-col">
                {
                    categories.map(item => (
                        <div key={item.id} className="flex items-center gap-5 rounded-xl hover:bg-[#E7E6E4] p-1 cursor-pointer">
                            <img className="w-10 h-10" src={item.image} alt={item.categoryName} />
                            <p>{item.categoryName}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;