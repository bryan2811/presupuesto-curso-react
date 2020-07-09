import React, { Fragment, useState } from 'react';
import Pregunta from './Components/Pregunta';
import Formulario from './Components/Formulario';

function App() {

  // Definir el State
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);

  return (
    <div className="App">
      <Fragment>
        
        <div className="container">
          <header>
            <h1>Presupuesto Semanal</h1>

            <div className="contenido-principal contenido">
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
              />

              <div className="row">
                <div className="one-half column">
                  <Formulario />
                </div>

                <div className="one-half column">
                  2
                </div>
              </div>

            </div>


          </header>
        </div>

      </Fragment>
    </div>
  );
}

export default App;
