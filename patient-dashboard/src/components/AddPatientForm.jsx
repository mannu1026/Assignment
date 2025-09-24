import { useState } from "react";

const AddPatientForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", age: "", contact: "", condition: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now() }); // id generated locally
    setForm({ name: "", age: "", contact: "", condition: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow my-4">
      <h3 className="font-bold mb-2">Add New Patient</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name"
        className="border p-2 mb-2 w-full" />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age"
        className="border p-2 mb-2 w-full" />
      <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact"
        className="border p-2 mb-2 w-full" />
      <input name="condition" value={form.condition} onChange={handleChange} placeholder="Condition"
        className="border p-2 mb-2 w-full" />
      <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
        Add Patient
      </button>
    </form>
  );
};

export default AddPatientForm;