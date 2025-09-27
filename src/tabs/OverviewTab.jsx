import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const moodData = [
  { week: "Week 1", Stress: 40, Mood: 60 },
  { week: "Week 2", Stress: 55, Mood: 45 },
  { week: "Week 3", Stress: 35, Mood: 70 },
  { week: "Week 4", Stress: 50, Mood: 50 },
];

const riskAlerts = [
  { name: "John Doe", class: "CSE A", risk: "High", lastActive: "2 hrs ago" },
  { name: "Priya Sharma", class: "ECE B", risk: "Medium", lastActive: "1 day ago" },
  { name: "Rahul Kumar", class: "ME C", risk: "Low", lastActive: "3 hrs ago" },
];

export default function OverviewTab() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Students", value: "1,245", color: "bg-gradient-to-r from-purple-500 to-purple-400" },
          { title: "Active Users Today", value: "842", color: "bg-gradient-to-r from-green-400 to-green-300" },
          { title: "High Risk Students", value: "56", color: "bg-gradient-to-r from-red-500 to-red-400" },
          { title: "Reports Generated", value: "120", color: "bg-gradient-to-r from-blue-400 to-blue-300" },
        ].map((card, i) => (
          <div
            key={i}
            className={`${card.color} p-6 rounded-xl shadow-lg text-white hover:scale-105 transform transition`}
          >
            <p className="text-sm font-medium">{card.title}</p>
            <h3 className="text-3xl font-bold mt-2">{card.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Stress vs Mood Trends</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={moodData}>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Stress" stroke="#f87171" strokeWidth={3} />
                <Line type="monotone" dataKey="Mood" stroke="#60a5fa" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Risk Alerts</h3>
          <table className="w-full text-left divide-y divide-gray-200">
            <thead>
              <tr className="text-gray-500">
                <th className="py-2">Name</th>
                <th>Class</th>
                <th>Risk</th>
                <th>Last Active</th>
              </tr>
            </thead>
            <tbody>
              {riskAlerts.map((alert, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="py-2">{alert.name}</td>
                  <td>{alert.class}</td>
                  <td
                    className={`font-semibold ${
                      alert.risk === "High" ? "text-red-500" : alert.risk === "Medium" ? "text-orange-500" : "text-green-500"
                    }`}
                  >
                    {alert.risk}
                  </td>
                  <td>{alert.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}