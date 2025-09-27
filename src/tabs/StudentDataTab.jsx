export default function StudentDataTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Manage Student Data</h2>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Upload / Update Student Profiles</h3>
        <p className="text-gray-500 mb-4">Add new student data or update existing records. Ensure data integrity.</p>
        <input
          type="file"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg mb-4 hover:border-blue-400 transition cursor-pointer"
        />
        <button className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition">
          Upload Data
        </button>
      </div>
    </div>
  );
}
