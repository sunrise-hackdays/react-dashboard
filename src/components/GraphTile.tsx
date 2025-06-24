import React from 'react';
import StatCard from './StatCard';
import styles from './GraphTile.module.css';

type Stat = {
  label: string;
  value: number;
  color: string;
};

type Props = {
  stats: Stat[];
};

export default function GraphTile({ stats }: Props) {
  return (
    <div className={styles.tile}>
      <h3 className={styles.title}>SLA Stats</h3>
      <div className={styles.statsContainer}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <p className={styles.label}>{s.label}</p>
            <StatCard value={s.value} color={s.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
