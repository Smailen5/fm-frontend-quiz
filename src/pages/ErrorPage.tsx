import { Navbar } from "../components";

export const ErrorPage = () => {
  return (
    <>
      <Navbar />

      <div className="space-y-2">
        <div className="flex w-full flex-col items-center gap-4 rounded-md bg-red-200 p-4">
          <h3 className="text-3xl font-semibold">Page not found</h3>
          <p className="text-2xl">Error 404</p>
        </div>
        <button className="w-full rounded-md bg-violet-500 p-2 text-white">
          Back to Home
        </button>
      </div>
    </>
  );
};
