import logo from './logo.svg';
import './App.css';
import Principio from './Componentes/Principo/Principio';
import Acerca from './Componentes/Acerca/Acerca';
import Servicios from './Componentes/Servicios/Servicios';
import ScrollVelocity from './Componentes/ScrollVelocity';
import Cursos from './Componentes/Cursos/Cursos';

import Proyectos from './Componentes/Proyectos/Proyectos';
import Final from './Componentes/Final/Final';




const velocity = 100;


function App() {
  return (
    <div className="App">
      <Principio />
      <section>
      <Acerca />
      </section>
      <ScrollVelocity
        texts={['Creatividad', 'Soluciones']} 
        velocity={velocity} 
        className="custom-scroll-text"
      />
      <Servicios />
      <Cursos />
      <section id='proyectos'>

      <Proyectos />
      </section>
      <Final />
    </div>
  );
}

export default App;
