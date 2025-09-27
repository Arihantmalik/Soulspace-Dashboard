export default function SupportTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Support & Intervention</h2>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Counselor Notifications</h3>
        <p className="text-gray-500 mb-4">
          Notify counselors, schedule mentorship sessions, and track AI-based risk predictions.
        </p>
        <button className="px-6 py-2 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition">
          Notify Counselors
        </button>
      </div>
    </div>
  );
}
