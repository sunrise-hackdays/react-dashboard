import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './StatCard.module.css';

type Props = {
  value: number;
  color: string;
};

export default function StatCard({ value, color }: Props) {
  const data = [
    { name: 'filled', value },
    { name: 'empty',  value: 100 - value },
  ];

  return (
    <div className={styles.card}>
      <ResponsiveContainer width="100%" height={80}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={24}
            outerRadius={32}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            labelLine={false}
            label={({ cx, cy }) => (
              <text
                x={cx}
                y={cy}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
              >
                {value}%
              </text>
            )}
          >
            <Cell fill={color} />
            <Cell fill="#eee" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
