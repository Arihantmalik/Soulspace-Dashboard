import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const moodData = [
  { week: "Week 1", Stress: 40, Mood: 60 },
  { week: "Week 2", Stress: 55, Mood: 45 },
  { week: "Week 3", Stress: 35, Mood: 70 },
  { week: "Week 4", Stress: 50, Mood: 50 },
];

export default function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Analytics & Reports</h2>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Stress vs Mood Report</h3>
        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer>
            <BarChart data={moodData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Stress" fill="url(#stressGradient)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Mood" fill="url(#moodGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="stressGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f87171" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#f87171" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.2} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition">
          Export Report
        </button>
      </div>
    </div>
  );
}
