import { useState } from "react";
import api from "../api/api";

export default function Analysis() {
  const [patientId, setPatientId] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);

  const runAnalysis = async () => {
    setLoading(true);
    try {
      const res = await api.post(`/analysis/${patientId}`);
      setAlerts(res.data);
    } catch (err) {
      alert("Error running analysis");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          AI Clinical Discrepancy Analysis
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            className="border p-2 flex-1"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
          <button
            onClick={runAnalysis}
            className="bg-purple-600 text-white px-4 rounded"
          >
            Run Analysis
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-500">
            Running AI analysis...
          </p>
        )}

        {!loading && alerts.length === 0 && (
          <p className="text-center text-gray-400">
            No discrepancies detected yet
          </p>
        )}

        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`border-l-4 p-4 mb-4 rounded ${
              alert.severity === "HIGH"
                ? "border-red-600 bg-red-50"
                : "border-yellow-500 bg-yellow-50"
            }`}
          >
            <h3 className="font-bold text-lg mb-1">
              Severity: {alert.severity}
            </h3>
            <p className="text-gray-800">{alert.message}</p>

            {alert.ai_explanation && (
              <div className="mt-3 p-3 bg-white border rounded">
                <h4 className="font-semibold text-sm mb-1">
                  AI Explanation
                </h4>
                <p className="text-sm text-gray-700">
                  {alert.ai_explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
