import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cruddata from './Cruddata';
import Empedit from './Empedit';
import Empcreate from './Empcreate';
function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Cruddata/> }/>
      <Route path="/empdata/:empid" element={ <Empedit/> }/>
      <Route path="/empadd" element={ <Empcreate/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
