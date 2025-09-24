const PatientDetails = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Contact: {patient.contact}</p>
      <p>Condition: {patient.condition}</p>
    </div>
  );
};

export default PatientDetails;