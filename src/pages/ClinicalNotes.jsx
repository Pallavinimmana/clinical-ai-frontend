import { useState } from "react";
import api from "../api/api";

export default function ClinicalNotes() {
  const [patientId, setPatientId] = useState("");
  const [content, setContent] = useState("");

  const submitNote = async () => {
    try {
      await api.post("/clinical-notes/", {
        patient_id: patientId,
        content,
      });
      alert("Clinical note added");
      setContent("");
    } catch {
      alert("Failed to add clinical note");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Clinical Note</h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3 h-32"
        placeholder="Clinical note text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={submitNote}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Submit Clinical Note
      </button>
    </div>
  );
}
