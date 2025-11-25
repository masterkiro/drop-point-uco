import React, { useState } from 'react';
import DropPointsMap from './components/DropPointsMap';
import AddDropPointForm from './components/AddDropPointForm';
import initialDropPoints from './data/dropPointsData';

function App() {
  const [dropPoints, setDropPoints] = useState(initialDropPoints);

  const addDropPoint = (newPoint) => {
    setDropPoints([...dropPoints, { id: dropPoints.length + 1, ...newPoint }]);
  };

  return (
    <div>
      <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white', textAlign: 'center' }}>
        <h1>Drop Point Minyak Jelantah</h1>
        <p>Temukan titik drop minyak jelantah terdekat</p>
      </header>
      <AddDropPointForm addDropPoint={addDropPoint} />
      <DropPointsMap dropPoints={dropPoints} />
    </div>
  );
}

export default App;
