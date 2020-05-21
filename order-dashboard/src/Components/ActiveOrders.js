import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import 'C:/Users/Dell/Desktop/REACT/order-dashboard/src/App.css';

import Navigation from './Navigation';
import CardsSection from './CardsSection';
import OperationsTable from './OperationsTable';

const ActiveOrders= () =>{
return(
    
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm2 ms-xl2">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
        <div className="ms-Grid-row">            
                <h1>Active Orders</h1>           
          </div>
          <div className="ms-Grid-row">
            <CardsSection />
          </div>
          <div className="ms-Grid-row">
            <OperationsTable />
          </div>
        </div>
      </div>
    </div>
);


}

export default ActiveOrders;
