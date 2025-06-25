import React from "react";
import doctorImg1 from "../../assets/pexels-kowalievska-1170979.jpg";
import doctorImg2 from "../../assets/pexels-rdne-6129119.jpg";

const Banner = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-3/4 mx-auto border-3 border-white rounded-xl p-10 mt-8 space-y-6">
      <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-center mx-auto md:w-4/6 w-3/4">
        Dependable Care, Backed by Trusted <br /> Professionals.
      </h2>
      <p className="text-center w-11/12 md:w-4/6 mx-auto text-sm md:text-lg">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a 
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>

      <form>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-5 w-full">
          <input
            type="text"
            placeholder="Search any doctor"
            className="w-full md:w-80 lg:w-[400px] bg-white rounded-2xl px-4 py-2 shadow-sm"
          />
          <button
            type="submit"
            className="  rounded-2xl px-5 py-2 shadow-md   my-4 flex text-blue-600 border  border-blue-600  font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer"
          >
            Search Now
          </button>
        </div>
      </form>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-10 pb-3">
        <img
          src={doctorImg1}
          className="w-60 md:w-72 lg:w-80 rounded-lg shadow-md"
          alt="Doctor 1"
        />
        <img
          src={doctorImg2}
          className="w-60 md:w-72 lg:w-80 rounded-lg shadow-md"
          alt="Doctor 2"
        />
      </div>
    </div>
  );
};

export default Banner;
