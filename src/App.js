import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from './Container/Container'
import RouteChange from './RootChange'
import {useState} from 'react'

function App() {

  const [toggle,settoggle] = useState(1)

  const toggleTab = (index) => {
    settoggle(index)
  }

  return (
    
    <div className="App">
      <div className="container-page">
      <Container toggle={toggle}/>
      
      <RouteChange toggle={toggle} toggleTab={toggleTab}/>
      
      </div>
      
    </div>
   
  );
}

export default App;
