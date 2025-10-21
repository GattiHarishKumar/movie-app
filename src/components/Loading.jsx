import React from 'react';

export default function Loading() {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <div className="spinner" />
      <p>Loading movies…</p>
    </div>
  );
}
