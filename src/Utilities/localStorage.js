export const getAppointments = () => {
  const myAppointmentsSTR = localStorage.getItem("appointments");
  if (myAppointmentsSTR) return JSON.parse(myAppointmentsSTR);
  return [];
};

export const setApppointments = (newAppointment) => {
  const appointments = getAppointments();
  const isExist = appointments.find(
    (appointment) => appointment.regNumber === newAppointment.regNumber
  );

  if (isExist) {
    return { success: false, message: "Appointment already booked" };
  }

  appointments.push(newAppointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));

  return { success: true, message: " Appointment successfully booked!" };
};

export const cancelAppointments = (id) => {
  const appointments = getAppointments();
  const remainingAppointments = appointments.filter(
    (appointment) => appointment.regNumber !== id
  );

  localStorage.setItem("appointments", JSON.stringify(remainingAppointments));
  if (remainingAppointments) return true;
};
