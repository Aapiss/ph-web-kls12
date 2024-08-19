import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h2 className="text-3xl font-bold">Page Not Found 404</h2>
        <Link to={"/"} className="py-2 px-4 bg-slate-500 text-white rounded-lg">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
