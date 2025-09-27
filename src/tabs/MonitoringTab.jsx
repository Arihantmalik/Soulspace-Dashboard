export default function MonitoringTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Student Monitoring</h2>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Live Monitoring</h3>
        <p className="text-gray-500 mb-4">
          Track student engagement, mood trends, and exam-stress levels in real-time.
        </p>
        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400">
          Heatmap / Charts Placeholder
        </div>
      </div>
    </div>
  );
}
