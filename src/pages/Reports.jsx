import { useState } from "react";
import api from "../api/api";

export default function Reports() {
  const [patientId, setPatientId] = useState("");
  const [reports, setReports] = useState([
    { type: "CT", content: "" },
  ]);

  const addReport = () => {
    setReports([...reports, { type: "CT", content: "" }]);
  };

  const updateReport = (index, field, value) => {
    const updated = [...reports];
    updated[index][field] = value;
    setReports(updated);
  };

  const submitReports = async () => {
    try {
      for (const report of reports) {
        await api.post("/reports", {
          patient_id: patientId,
          report_type: report.type.toLowerCase(),
          content: report.content,
        });
      }
      alert("Radiology reports submitted successfully");
      setReports([{ type: "CT", content: "" }]);
    } catch (err) {
      alert("Error submitting reports");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-[450px]">
        <h2 className="text-xl font-bold mb-4 text-center">
          Multi-Document Radiology Upload
        </h2>

        <input
          className="border p-2 w-full mb-4"
          placeholder="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />

        {reports.map((r, i) => (
          <div key={i} className="border p-3 mb-3 rounded">
            <select
              className="border p-2 w-full mb-2"
              value={r.type}
              onChange={(e) =>
                updateReport(i, "type", e.target.value)
              }
            >
              <option value="CT">CT Scan</option>
              <option value="MRI">MRI</option>
              <option value="Echo">Echocardiogram</option>
            </select>

            <textarea
              className="border p-2 w-full"
              rows="3"
              placeholder="Enter findings..."
              value={r.content}
              onChange={(e) =>
                updateReport(i, "content", e.target.value)
              }
            />
          </div>
        ))}

        <button
          onClick={addReport}
          className="bg-gray-200 w-full py-2 rounded mb-2"
        >
          + Add Another Report
        </button>

        <button
          onClick={submitReports}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Submit All Reports
        </button>
      </div>
    </div>
  );
}
