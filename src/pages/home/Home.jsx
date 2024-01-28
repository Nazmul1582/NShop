import Category from "./Category";

const Home = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr_230px] gap-6 pt-20">
                    <div>
                        <Category />
                    </div>
                    <div>main section</div>
                    <div className="bg-white rounded-2xl shadow-lg p-3">Card</div>
                </div>
            </div>
        </section>
    );
};

export default Home;