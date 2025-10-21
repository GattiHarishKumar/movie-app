import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <strong>Error:</strong> {message}
    </div>
  );
}
