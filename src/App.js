import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Frase from './components/Frase';


function App() {
  //creo el state
  const [personaje, setPersonaje] = useState([])

  useEffect(()=>{
    // aqui escribo la logica
    consultarApi();
  }, []); // se ejecuta solo en estapa de montaje)

  // comienzo a utilizar la Api
  const consultarApi = async () => {
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    console.log(respuesta);
  }

  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
      {/* process.env.PUBLIC_URL este obejto me devuelva la direccion de la carpeta de mi proyecto */}
      <img src={process.env.PUBLIC_URL +'logo.png'} alt="logo simpsons" className='w-75 my-4'/>
      <Button variant="warning">Obtener Frase</Button>
      <Frase />
    </section>
  );
}

export default App;
