import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";

const CardContainer = ({ data }) => {
  const [visibleDoctors, setVisibleDoctors] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    if (viewAll) setVisibleDoctors(data);
    else {
      setVisibleDoctors(data.slice(0, 6));
    }
  }, [viewAll, data]);

  return (
    <div className="  w-11/12 md:w-10/12 lg:w-3/4 mx-auto rounded-xl p-10 mt-8 space-x-7">
      <div className="text-center ">
        <h1 className="font-extrabold lg:text-4xl my-10">Our Best Doctors</h1>
        <p className="opacity-80 w-3/4 mx-auto lg:w-full my-6">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />{" "}
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>
      <div className=" grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 rounded-xl mt-8 gap-4">
        {visibleDoctors.map((docInfo) => (
          <CardDetails docInfo={docInfo} key={docInfo.regNumber}></CardDetails>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button
          className="mb-4   text-blue-600 border  border-blue-600 py-2 px-3 md:px-6 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer"
          onClick={() => {
            setViewAll((prev) => !prev);
          }}
        >
          {viewAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
