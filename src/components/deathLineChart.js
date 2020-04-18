import React from 'react';
import useDeathCase from '../hooks/useDeathCase';

export default function DeathLineChart() {
  const { data } = useDeathCase();

  return <div>chart here</div>;
}
