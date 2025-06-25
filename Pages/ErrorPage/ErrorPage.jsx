import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../../src/Components/Header/Navbar";
import errorImg from '../../src/assets/10740175.jpg'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="plus-jakarta-sans">
      <Navbar></Navbar>
        <img src={errorImg} className="lg:w-120 mx-auto w-full" alt="" />
        <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg mt-4">{error?.statusText || "Something went wrong."}</p>
      <p className="mt-2 text-sm text-gray-500">{error?.message}</p>
      <a
      href="/"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
    >
       Go Home
    </a>
    </div>
    </div>
  );
};

export default ErrorPage;
