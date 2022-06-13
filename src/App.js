import './App.css';
import DynamicTabUsingMUI from './components/DynamicTabUsingMUI';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RichestPersonsImages from './components/RichestPersonsImages';


function App() {
  return (
    <div className="App">
      <div>
         <NavBar/>
      </div>

      <div>
        <Home/>
      </div>

      <div>
        <RichestPersonsImages/>
      </div>

      <div>
        <DynamicTabUsingMUI/>
      </div>
      <div >
        <Footer/>
      </div>
    </div>
  );
}

export default App;
