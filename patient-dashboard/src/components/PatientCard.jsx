// PatientCard.js
import React from 'react';

const PatientCard = ({ patient, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{patient.name}</h3>
        <button
          onClick={() => onDelete(patient.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-600">Age: {patient.age}</p>
      <p className="text-gray-600">Mobile: {patient.mobileNo}</p>
      <p className="text-gray-600">Condition: {patient.condition}</p>
    </div>
  );
};

export default PatientCard;