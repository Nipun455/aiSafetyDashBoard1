import React, { useState } from 'react';

const NewIncidentForm = ({ onAdd }) => {
  const [titles, setTitles] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [severitys, setSeveritys] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titles.trim() || !descriptions.trim()) return;

    const newIncident = {
      id: Date.now(),
      titles,
      descriptions,
      severitys,
      reported_at: new Date().toISOString(),
    };

    onAdd(newIncident);
    setTitles('');
    setDescriptions('');
    setSeveritys('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="incident-form">
      <input
        placeholder="Title"
        value={titles}
        onChange={(e) => setTitles(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={descriptions}
        onChange={(e) => setDescriptions(e.target.value)}
        required
      />
      <select value={severitys} onChange={(e) => setSeveritys(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit Incident</button>
    </form>
  );
};

export default NewIncidentForm;
