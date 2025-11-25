import React, { useState } from 'react';

function AddDropPointForm({ addDropPoint }) {
  const [name, setName] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !lat || !lng) {
      setError('Nama, Latitude, dan Longitude harus diisi.');
      return;
    }

    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    if (isNaN(latNum) || latNum < -90 || latNum > 90) {
      setError('Latitude tidak valid. Harus antara -90 dan 90.');
      return;
    }

    if (isNaN(lngNum) || lngNum < -180 || lngNum > 180) {
      setError('Longitude tidak valid. Harus antara -180 dan 180.');
      return;
    }

    const newPoint = {
      name,
      lat: latNum,
      lng: lngNum,
      isOpen,
      description,
    };

    addDropPoint(newPoint);

    // Clear form
    setName('');
    setLat('');
    setLng('');
    setIsOpen(true);
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '10px', maxWidth: '600px', margin: '10px auto', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h2>Tambah Titik Drop Baru</h2>
      {error && <div style={{ color: 'red', marginBottom: '8px' }}>{error}</div>}
      <div style={{ marginBottom: '8px' }}>
        <label>
          Nama:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%' }} required />
        </label>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label>
          Latitude:
          <input type="number" step="any" value={lat} onChange={(e) => setLat(e.target.value)} style={{ width: '100%' }} required />
        </label>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label>
          Longitude:
          <input type="number" step="any" value={lng} onChange={(e) => setLng(e.target.value)} style={{ width: '100%' }} required />
        </label>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label>
          Status:
          <select value={isOpen} onChange={(e) => setIsOpen(e.target.value === 'true')} style={{ width: '100%' }}>
            <option value="true">Buka</option>
            <option value="false">Tutup</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label>
          Deskripsi:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%' }} />
        </label>
      </div>
      <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#2c3e50', color: 'white', border: 'none', borderRadius: '4px' }}>
        Tambah Titik Drop
      </button>
    </form>
  );
}

export default AddDropPointForm;
