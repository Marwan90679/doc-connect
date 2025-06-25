import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaRegAddressBook } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { PiSealWarningThin } from "react-icons/pi";
import { setApppointments } from "../../src/Utilities/localStorage";
import { ToastContainer, toast } from "react-toastify";


const DocInfo = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const doctorFind = data.find((eachDoc) => eachDoc.regNumber === id);
  const {
    name,
    regNumber,
    img,
    education,
    currentWorkplace,
    consultationFee,
    educationInstitution,
    specialty,
    availability,
  } = doctorFind;

  const availableDays = availability.days.map((day) => day);

  return (
    <div className="w-11/12 md:w-10/12 lg:w-3/4 mx-auto">
      <div className="bg-white  rounded-xl p-10 my-10 text-center">
        <h1 className="font-extrabold text-2xl md:text-3xl mb-8">
          Doctor’s Profile Details
        </h1>
        <p className="w-3/4 mx-auto font-medium">
          Get to know more about our experienced and trusted doctors. With
          dedication and care, they are committed to guiding you toward better
          health and well-being every step of the way!
        </p>
      </div>
      <div className="flex lg:flex-row flex-col px-6 py-4 gap-6 ">
        <div>
          <img
            src={img}
            className="w-100 shadow-md rounded-xl  mx-auto "
            alt=""
          />
        </div>
        <div className="space-y-2 text-center lg:text-start">
          <h1 className="text-xl font-bold mb-2">{name}</h1>
          <p className="font-medium">{specialty}</p>
          <p className="font-semibold text-gray-700">
            {education} , {educationInstitution}
          </p>
          <p className="">
            Working at: <br />
            <span className="font-bold">{currentWorkplace}</span>
          </p>
          <div>
            <hr
              className="border-t border-dashed border-gray-400 
               w-80  md:w-[22rem] lg:w-[25rem] mx-auto lg:mx-0 my-2"
            />

            <p className="flex items-center gap-2 font-semibold ">
              Reg:
              <FaRegAddressBook size={15} /> <span>{regNumber}</span>
            </p>
            <hr
              className="border-t border-dashed border-gray-400 
               w-80  md:w-[22rem] lg:w-[25rem] mx-auto lg:mx-0  my-2"
            />
            <div className="flex my-3">
              <p>Availability :</p>
              <div className="w-3/4">
                {availableDays.map((eachDay,index) => (
                  <div key={index} className="ml-1 badge badge-soft text-orange-800 badge-warning ">
                    {eachDay}
                  </div>
                ))}
              </div>
            </div>
            <p className="font-bold flex">
              Consultation fee :
              <span className="flex items-center space-x-1 text-[#176AE5]">
                {consultationFee} <FaBangladeshiTakaSign />{" "}
                <span className="text-gray-500">(incl. Vat) </span> Per
                consultation
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl py-5 px-10 my-10 text-center">
        <h3 className=" font-bold text-xl">Book an Appointment</h3>
        <hr
          className="border-t my-4 border-dashed border-gray-400 
               "
        />
        <div className="flex justify-between">
          <p className="font-semibold">Availability</p>
          <div className="badge badge-soft badge-success font-medium">
            Doctor Available Today
          </div>
        </div>
        <div className="mt-6 mb-10  flex items-center ">
          <div className="badge badge-info  border-none py-12 md:py-6">
            <span>
              <PiSealWarningThin size={15} />
            </span>
            <span>
              {" "}
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </span>
          </div>
        </div>
        
        <Link to='/appointments'>
        <button
            onClick={() => {
              const result = setApppointments(doctorFind);
              result.success
                ? toast.success(result.message)
                : toast.warning(result.message);
            }}
            className="text-amber-100 mt-5 hover:text-white transition cursor-pointer rounded-3xl w-full  py-2 font-semibold bg-[#176AE5] "
          >
            Book Appointment Now
          </button>
        </Link>
       
       
      </div>
    </div>
  );
};

export default DocInfo;
