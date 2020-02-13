import React, { useState } from 'react';
import './App.css';
import BoxContainer from './components/containers/BoxContainer'
import FormContainer from './components/containers/FormContainer'
import Header from './components/Header'

function App() {
  const [borders, setBorders] = useState({})
  return (
    <React.Fragment>
      <Header />
      <main>
        <FormContainer setBorders={setBorders} borders={borders} />
        <BoxContainer borders={borders} />
      </main>
    </React.Fragment>
  );
}

export default App;
