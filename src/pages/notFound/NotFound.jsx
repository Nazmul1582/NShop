import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <section className="min-h-screen container mx-auto grid place-items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Oops!</h2>
        <p className="italic text-gray-400 my-5">
          {error.status} {error.statusText}
        </p>
        <Link to="/">
          <button className="bg-[#E7E6E4] px-4 py-2 lg:px-6 lg:py-3 rounded-2xl font-semibold">
              Go to home page
            </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
