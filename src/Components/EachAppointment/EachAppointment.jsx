import React from "react";
import { ToastContainer, toast } from "react-toastify";
const EachAppointment = ({ appointment, handleCancellation }) => {
  const { name, education, consultationFee, regNumber } = appointment;
  return (
    <div className="bg-white rounded-2xl py-5 px-10 mb-4 ">
      <h3 className="font-bold ">{name}</h3>
      <div>
        <div className="flex justify-between">
          <p className="font-medium text-gray-600">{education}</p>
          <p className="font-semibold text-gray-600">
            Appointment Fee :{consultationFee} Taka+ vat{" "}
          </p>
        </div>

        <hr
          className="border-t my-4 border-dashed border-gray-400 
               "
        />
        <button
          onClick={() => {
            const result = handleCancellation(regNumber);
            result && toast.warn('appointment canceled');
          }}
          className="text-red-600 border border-blue-950 hover:text-white transition cursor-pointer rounded-3xl w-full  py-2 font-semibold hover:bg-red-600 hover:border-none"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default EachAppointment;
