import { useState } from "react";
import api from "../api/api";

export default function Labs() {
  const [patientId, setPatientId] = useState("");
  const [testName, setTestName] = useState("");
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("");

  const submitLab = async () => {
    try {
      await api.post("/labs", {
        patient_id: patientId,
        test_name: testName,
        value: Number(value),
        unit: unit,
      });

      alert("Lab result submitted successfully");

      // clear form
      setTestName("");
      setValue("");
      setUnit("");
    } catch (err) {
      alert("Error submitting lab result");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4 text-center">
          Add Lab Result
        </h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Test Name (CRP / WBC)"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Unit (mg/L, cells/mm3)"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />

        <button
          onClick={submitLab}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Submit Lab Result
        </button>
      </div>
    </div>
  );
}
