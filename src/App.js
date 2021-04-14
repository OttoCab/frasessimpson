import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Frase from './components/Frase';
import Spinner from './components/Spinner';


function App() {
  //creo el state
  const [personaje, setPersonaje] = useState({})
  const [cargando, setCargando] = useState(false)
  useEffect(()=>{
    // aqui escribo la logica
    consultarApi();
  }, []); // se ejecuta solo en estapa de montaje)

  // comienzo a utilizar la Api
  //async es para cuando tengo que esperar una respuesta
  // va de la mano con await
  const consultarApi = async () => {
    setCargando(true);
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const resultado = await respuesta.json()
    console.log(resultado[0]);
    // guardar los datos en el state
    setTimeout(() => {
      setPersonaje(resultado[0]);
      setCargando(false); // Operador ternario, es una forma de escribir una condicion logica
    // que cuando este en true hago una cosa y en false otra
    }, 1000)
  };

  // Sintaxis del Operador Ternario:
  //(condicon logica) ? (lo que quiero que pase si es true la condicion logica) : (lo que quiero que pase si es false la condicion logica)
  const mostarComp = (cargando === true)? (<Spinner></Spinner>) : (<Frase personaje={personaje}></Frase>);

  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
      {/* process.env.PUBLIC_URL este obejto me devuelva la direccion de la carpeta de mi proyecto */}
      <img src={process.env.PUBLIC_URL +'logo.png'} alt="logo simpsons" className='w-75 my-4'/>
      <Button variant="warning" onClick={() => consultarApi()}>Obtener Frase</Button>
      {mostarComp}
    </section>
  );
}

export default App;
