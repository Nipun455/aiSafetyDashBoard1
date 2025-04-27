import React, { useState } from 'react';

const IncidentItem = ({ incident }) => {
  const [Details, setDetails] = useState(false);

  return (
    <div className="incident-card">
      <h3>{incident.title}</h3>
      <p>Reported on {new Date(incident.reported_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      <button onClick={() => setDetails(!Details)}>
        {Details ? 'Hide Details' : 'View Details'}
      </button>
      {Details && <p>{incident.description}</p>}
      <p><strong>{incident.severity}</strong></p>
    </div>
  );
};

export default IncidentItem;
