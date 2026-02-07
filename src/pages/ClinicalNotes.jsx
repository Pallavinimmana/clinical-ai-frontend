import { useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function ClinicalNotes() {
  const [patientId, setPatientId] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const submitNote = async () => {
    if (!patientId || !content) {
      alert("Patient ID and clinical note are required");
      return;
    }

    try {
      await api.post("/clinical-notes/", {
        patient_id: patientId,
        content,
      });

      setMessage("✅ Clinical note submitted successfully");
      setContent("");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit clinical note");
    }
  };

  return (
    <>
      

      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Add Clinical Note</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3"
          rows={5}
          placeholder="Clinical notes (symptoms, diagnosis, observations)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={submitNote}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Clinical Note
        </button>

        {message && (
          <p className="mt-3 text-green-600 font-medium">{message}</p>
        )}
      </div>
    </>
  );
}
