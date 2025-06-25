import React, { useEffect, useState } from "react";
import { cancelAppointments, getAppointments } from "../../src/Utilities/localStorage";
import EachAppointment from "../../src/Components/EachAppointment/EachAppointment";
import Chart from "../../src/Components/BarChart/Chart";
import { Link } from "react-router";

const Appointments = () => {
  const[appointments,setAppointments]=useState([]);
  useEffect(()=>{
    const currentAppointments =getAppointments();
    setAppointments(currentAppointments)
  },[])

const handleCancellation =regNumber=>{
  const result = cancelAppointments(regNumber); 

  if (result) {
    const updated = getAppointments();
    setAppointments(updated);
  }

  return result;

}

  

  const data = appointments.map((doc) => ({
    name: doc.name,
    fee: doc.consultationFee,
  }));
  return (
    <div>
      {appointments.length === 0 ? (
        <div className="text-center w-6/12  mx-auto mt-14 lg:space-y-6 space-y-3">
            <h1 className="font-extrabold text-3xl">You Have not Booked any appointment yet</h1>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           <Link to='/'> <button className=" lg:px-6  text-blue-600 rounded-3xl px-4 py-2 border  border-blue-600  font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer">Book One Now</button></Link>
        </div>
      ) : (
        <div className="w-11/12 md:w-10/12 lg:w-3/4 mx-auto my-1">
          {/* Chart Section */}
          <Chart data={data}></Chart>

          {/* Appointments List Section */}
          <div>
            <div className="text-center space-y-3 lg:space-y-6">
              <h2 className="font-extrabold text-xl lg:text-3xl">
                My Today Appointments
              </h2>
              <p className="font-medium text-lg mb-5">
                Our platform connects you with verified, experienced doctors
                across various specialties — all at your convenience.
              </p>
            </div>
            <div>
              {appointments.map((appointment) => (
                <EachAppointment
                handleCancellation={handleCancellation}
                  key={appointment.regNumber}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
