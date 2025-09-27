import { useState, useMemo } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

const students = [
  { id: 1, name: "John Doe", class: "CSE A" },
  { id: 2, name: "Priya Sharma", class: "ECE B" },
  { id: 3, name: "Rahul Kumar", class: "ME C" },
];

const reportsData = {
  1: {
    moodStress: [
      { week: "Week 1", Stress: 40, Mood: 60 },
      { week: "Week 2", Stress: 55, Mood: 45 },
      { week: "Week 3", Stress: 35, Mood: 70 },
      { week: "Week 4", Stress: 50, Mood: 50 },
    ],
    activity: [
      { day: "Mon", Active: 2 },
      { day: "Tue", Active: 4 },
      { day: "Wed", Active: 3 },
      { day: "Thu", Active: 5 },
      { day: "Fri", Active: 2 },
    ],
    riskAlerts: [
      { date: "2025-09-20", type: "High Stress", note: "Missed assignment" },
      { date: "2025-09-22", type: "Medium Risk", note: "Late submission" },
    ],
  },
  2: {
    moodStress: [
      { week: "Week 1", Stress: 30, Mood: 70 },
      { week: "Week 2", Stress: 45, Mood: 55 },
      { week: "Week 3", Stress: 50, Mood: 50 },
      { week: "Week 4", Stress: 40, Mood: 60 },
    ],
    activity: [
      { day: "Mon", Active: 3 },
      { day: "Tue", Active: 5 },
      { day: "Wed", Active: 2 },
      { day: "Thu", Active: 4 },
      { day: "Fri", Active: 3 },
    ],
    riskAlerts: [
      { date: "2025-09-21", type: "Medium Risk", note: "Late submission" },
    ],
  },
  3: {
    moodStress: [
      { week: "Week 1", Stress: 20, Mood: 80 },
      { week: "Week 2", Stress: 25, Mood: 75 },
      { week: "Week 3", Stress: 30, Mood: 70 },
      { week: "Week 4", Stress: 35, Mood: 65 },
    ],
    activity: [
      { day: "Mon", Active: 1 },
      { day: "Tue", Active: 3 },
      { day: "Wed", Active: 2 },
      { day: "Thu", Active: 3 },
      { day: "Fri", Active: 1 },
    ],
    riskAlerts: [],
  },
};

export default function StudentProfileTab() {
  const [selectedStudent, setSelectedStudent] = useState(students[0].id);
  const studentData = useMemo(() => reportsData[selectedStudent], [selectedStudent]);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Student Profile & Reports</h2>
      <div className="flex items-center gap-4">
        <label className="font-medium text-gray-700">Select Student:</label>
        <select
          className="border border-gray-300 rounded-lg p-2"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(parseInt(e.target.value))}
        >
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} ({s.class})
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Stress vs Mood Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={studentData.moodStress}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Stress" stroke="#f87171" strokeWidth={3} />
              <Line type="monotone" dataKey="Mood" stroke="#60a5fa" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={studentData.activity}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Active" fill="#34d399" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Risk Alerts</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="pb-2">Date</th>
              <th className="pb-2">Type</th>
              <th className="pb-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {studentData.riskAlerts.map((alert, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2">{alert.date}</td>
                <td className="py-2">{alert.type}</td>
                <td className="py-2">{alert.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Export Report
        </button>
      </div>
    </div>
  );
}
