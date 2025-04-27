import React, { useState } from 'react';
import IncidentForm from './NewIncidentForm';
import IncidentItem from './IncidentItem';

const initialIncidents = [
  {
    id: 1,
    title: 'Biased Recommendation Algorithm',
    description: 'Algorithm consistently favored certain demographics...',
    severity: 'Medium',
    reported_at: '2025-03-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'LLM Hallucination in Critical Info',
    description: 'LLM provided incorrect safety procedure information...',
    severity: 'High',
    reported_at: '2025-04-01T14:30:00Z',
  },
  {
    id: 3,
    title: 'Minor Data Leak via Chatbot',
    description: 'Chatbot inadvertently exposed non-sensitive user metadata...',
    severity: 'Low',
    reported_at: '2025-03-20T09:15:00Z',
  },
  {
    id: 4,
    title: 'AI Image Generator Creating Misleading Content',
    description: 'Generated misleading AI images...',
    severity: 'Medium',
    reported_at: '2025-03-25T12:00:00Z',
  },
];

const IncidentDashboard = () => {
  const [incidentList, setincidentList] = useState(initialIncidents);
  const [severityFilter, setseverityFilter] = useState('All');
  const [dateSortOrder, setdateSortOrder] = useState('Oldest');
  const [showForm, setShowForm] = useState(false);

  const getFilteredAndSortedIncidents = () => {
    let filtered = severityFilter === 'All'
      ? incidentList
      : incidentList.severityFilter((i) => i.severity === severityFilter);

    let sorted = [...filtered].sort((a, b) => {
      return dateSortOrder === 'Newest'
        ? new Date(b.reported_at) - new Date(a.reported_at)
        : new Date(a.reported_at) - new Date(b.reported_at);
    });

    return sorted;
  };

  const addIncident = (incident) => {
    setincidentList([incident, ...incidentList]);
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>AI Safety Incident Dashboard</h1>

      <div className="controls">
        <label>
          Severity:
          <select value={severityFilter} onChange={(e) => setseverityFilter(e.target.value)}>
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>

        <label>
          Sort by:
          <select value={dateSortOrder} onChange={(e) => setdateSortOrder(e.target.value)}>
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </label>

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Report New Incident"}
        </button>
      </div>

      {showForm && <IncidentForm onAdd={addIncident} />}

      <div className="incident-list">
        {getFilteredAndSortedIncidents().map((incident) => (
          <IncidentItem key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
};

export default IncidentDashboard;
