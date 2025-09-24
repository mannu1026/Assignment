import { useEffect, useState } from "react";
import { getPatients } from "../services/api";
import AddPatientForm from "../components/AddPatientForm";
import PatientCard from "../components/PatientCard";


const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPatients();
      setPatients(data);
    };
    fetchData();
  }, []);

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Patients</h1>
      <input
        type="text"
        placeholder="Search by name..."
        className="border p-2 my-4 w-full md:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

        <AddPatientForm onAdd={handleAddPatient} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(patient => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default Patients;