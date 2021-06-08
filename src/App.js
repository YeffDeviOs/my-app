import React from 'react';
import './App.css';

class App extends React.Component {
render() { 
return(
  <nav>
      <label className="logo">Calco.io</label>
      <ul>
        <li><a className="active" href="foo">Home</a></li>
        <li><a href="foo">Nosotros</a></li>
        <li><a href="foo">Servicios</a></li>
        <li><a href="foo">Colaborá</a></li>
        <li><a href="foo">Contacto</a></li>
      </ul>
  </nav>

  );
  }
}

export default App;
