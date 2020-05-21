import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './Components/Navigation';
import CardsSection from './Components/CardsSection';
import OperationsTable from './Components/OperationsTable';
import ActiveOrders from './Components/ActiveOrders';
import PastOrders from './Components/PastOrders';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
   <Route path= '/ActiveOrders' component={ActiveOrders}/> 
   <Route path= '/PastOrders' component={PastOrders}/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
