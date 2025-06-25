import React from "react";
import { Link } from "react-router";

const CardDetails = ({ docInfo }) => {
  const { img, name, education, regNumber } = docInfo;
  return (
    <div className=" rounded-xl  shadow-lg    bg-white space-y-3  px-2">
      <img
        className="w-100  rounded-xl  mx-auto mt-4 shadow-md"
        src={img} // Replace with actual image
        alt="Doctor"
      />

      <div className="pl-4 space-y-3 flex flex-col items-start">
        {/* Badges */}
        <div className="flex gap-2 ">
          <span className="bg-green-100 text-green-700 text-sm font-medium md:px-3 md:py-1 rounded-full">
            Available
          </span>
          <span className="bg-blue-100 text-blue-700 text-sm font-medium md:px-3 md:py-1 rounded-full">
            5+ Years Experience
          </span>
        </div>

        {/* Name and Qualifications */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-lg font-semibold text-gray-600">{education}</p>
        </div>

        {/* Registration */}
        <div className="text-sm text-gray-500">
          <span className="mr-1">®</span>Reg No: {regNumber}
        </div>
      </div>
      {/* Button */}
      <div className="text-center pt-4">
        <Link to={`/docInfo/${regNumber}`}>
          <button className="text-center my-4  text-blue-600 border mx-auto border-blue-600 py-2 px-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
