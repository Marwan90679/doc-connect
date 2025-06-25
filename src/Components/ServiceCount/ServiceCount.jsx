import React from "react";
import successdoc from "../../assets/success-doctor.png";
import patientsIcon from "../../assets/success-patients.png";
import reviewIcon from "../../assets/success-review.png";
import staffsIcon from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const ServiceCount = () => {
  return (
    <div className="text-center w-11/12 md:w-10/12 lg:w-3/4 mx-auto rounded-xl p-10 mt-8 space-y-3 space-x-7">
      <h1 className="font-bold lg:text-3xl">
        We Provide Best Medical Services
      </h1>
      <p>
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl text-start pl-10 py-6 shadow-sm space-y-6">
          <img src={successdoc} className="w-15" alt="" />
          <div>
            <h3 className="text-5xl font-extrabold">
              <CountUp
                
                end={199}
                duration={4}
                suffix="+"
                enableScrollSpy
              />
            </h3>
            <p className="text-gray-600 mt-1">Total Doctors</p>
          </div>
        </div>
        <div className="bg-white rounded-xl text-start pl-10 py-6 shadow-sm space-y-6">
          <img src={patientsIcon} className="w-15" alt="" />
          <div>
            <h3 className="text-5xl font-extrabold">
              <CountUp
             
                end={1900}
                duration={4}
                suffix="+"
                enableScrollSpy
              />
            </h3>
            <p className="text-gray-600 mt-1"> Patients</p>
          </div>
        </div>
        <div className="bg-white rounded-xl text-start pl-10 py-6 shadow-sm space-y-6">
          <img src={reviewIcon} className="w-15" alt="" />
          <div>
            <h3 className="text-5xl font-extrabold">
              <CountUp
                
                end={699}
                duration={4}
                suffix="+"
                enableScrollSpy
              />
            </h3>
            <p className="text-gray-600 mt-1">Total Reviews</p>
          </div>
        </div>
        <div className="bg-white rounded-xl text-start pl-10 py-6 shadow-sm space-y-6">
          <img src={staffsIcon} className="w-15" alt="" />
          <div>
            <h3 className="text-5xl font-extrabold">
              <CountUp
                
                end={300}
                duration={4}
                suffix="+"
                enableScrollSpy
              />
            </h3>
            <p className="text-gray-600 mt-1">Total Staffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCount;
