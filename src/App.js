import React, { Fragment } from 'react';
import Pregunta from './Components/Pregunta';

function App() {
  return (
    <div className="App">
      <Fragment>
        
        <div className="container">
          <header>
            <h1>Presupuesto Semanal</h1>

            <div className="contenido-principal contenido">
              <Pregunta />
            </div>
          </header>
        </div>

      </Fragment>
    </div>
  );
}

export default App;
