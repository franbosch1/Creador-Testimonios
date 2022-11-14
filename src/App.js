import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Titulo</h1>
      <Testimonio 
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='emma'
      cargo='Ingenieria de software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas con aprender JavaScript. Estudiar JavaScript, asi como estructuras de datos me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify' />
      <Testimonio
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='sarah'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio='El plan de estudios bien estructurado llevo mis conocimientos de programacion de un nivel de principiante total a un nivel muy seguro. Era todo loq ue necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increible.' />
      <Testimonio
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='shawn'
      cargo='Ingeniero de Software'
      empresa='Amazon'
      testimonio='Da miedo cambiar de carrera. Solo gane la confianza de que podia programar trabajando a traves de las cientas de horas de lecciones gratuitas. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software.' />
      </div>
    </div>
  );
}

export default App;
