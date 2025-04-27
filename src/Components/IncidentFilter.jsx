import React, { useState } from 'react';

const IncidentFilter = ({ incident }) => {
  const [showTheDetails, settheShowDetails] = useState(false);

  return (
    <div className="incident-card">
      <h3>{incident.title}</h3>
      <p>Reported on {new Date(incident.reported_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      <button onClick={() => settheShowDetails(!showTheDetails)}>
        {showTheDetails ? 'Hide Details' : 'View Details'}
      </button>
      {showTheDetails && <p>{incident.description}</p>}
      <p><strong>{incident.severity}</strong></p>
    </div>
  );
};

export default IncidentFilter;

