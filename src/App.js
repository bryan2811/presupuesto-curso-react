import React, { Fragment, useState } from 'react';
import Pregunta from './Components/Pregunta';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import ControlPresupuesto from './Components/ControlPresupuesto';

function App() {

  // Definir el State
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  // Cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  }

  return (
    <div className="App">
      <Fragment>
        
        <div className="container">
          <header>
            <h1>Presupuesto Semanal</h1>

            <div className="contenido-principal contenido">
              { 
                mostrarpregunta ? 
                (
                  <Pregunta 
                    guardarPresupuesto={guardarPresupuesto}
                    guardarRestante={guardarRestante}
                    actualizarPregunta={actualizarPregunta}
                  />
                )
                : 
                (
                  <div className="row">
                    <div className="one-half column">
                      <Formulario
                        agregarNuevoGasto={agregarNuevoGasto}
                      />
                    </div>

                    <div className="one-half column">
                      <Listado 
                        gastos={gastos}
                      />

                      <ControlPresupuesto 
                        presupuesto={presupuesto}
                        restante={restante}
                      />
                    </div>
                  </div>
                )
              }
            </div>


          </header>
        </div>

      </Fragment>
    </div>
  );
}

export default App;
