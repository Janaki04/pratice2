import './App.css';
import Countermain from './Component/Countermain';
import Effect from './Component/Effect';
import Form from './Component/Form';
import PureMain from './Component/PureMain';
import Reducer from './Component/Reducer';
import Ref from './Component/Ref';
import Change from './Component/Change';
import Clas from './Component/Clas';
import Fun from './Component/Fun';
import Parent from './Component/Parent';
import Resuable from './Component/Resuable';
import State from './Component/State';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import Student from './Component/Student'
import Contact from './Component/Contact'
import Main from './Component/Main';
import Api from './Component/Api';
import Create from './Component/Create';

function App() {
  return (
    <div className="App">
     <Fun/> 

     <Clas/>

      <State/>

      <Parent/>

      <Change/>

      <Resuable/> 

    <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/student' element={<Student/>}  />
    <Route path='/contact' element={<Contact/>}    />
    </Routes>
    </Router> 

    <Main/>

    <Api/>

    <Create/>

   <h1>REACT JS</h1> 
    <Countermain/> 


    <Effect/>

    <Ref/>

    <Reducer/>


    <PureMain/>
     <Form/> 





    </div>
  );
}

export default App;
