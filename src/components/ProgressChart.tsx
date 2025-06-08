'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  progress: number;
}

export default function ProgressChart({ progress }: Props) {
  const data = [
    { name: 'Completed', value: progress },
    { name: 'Remaining', value: 100 - progress },
  ];
  const COLORS = ['#06B6D4', '#E5E7EB'];

  return (
    <div className="bg-[#10151a] p-6 rounded-lg shadow-md text-white">
      <h4 className="text-lg font-semibold mb-4">Progress</h4>
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-gray-400 mt-2">{progress}% Complete</p>
    </div>
  );
}