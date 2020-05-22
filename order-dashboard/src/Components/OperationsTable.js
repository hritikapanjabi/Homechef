import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import MyDropdown from './MyDropdown'; 

const classNames = mergeStyleSets({
  table: {
    margin: 'auto',
  }
});



const operations = [
  {
    order_id: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    product_name: '$1 510',
    amount: 50,
    cooking_instructions: '20-05-2020',
    status:<MyDropdown/> ,
  },
  {
    order_id: '0000 0284 7529 4751 8475',
    product_name: '0980 9808 8200 7680',
    amount: '$1 010',
    cooking_instructions: '19-05-2020',
    status:<MyDropdown/> ,
    
  },
  {
    order_id: '0000 0284 7529 4751 8475',
    product_name: '0980 9808 8200 7680',
    amount: '$1 350',
    cooking_instructions: '18-05-2020',
    status:<MyDropdown/> ,
  },
  {
    order_id: '0000 0284 7529 4751 8475',
    product_name: '0980 9808 8200 7680',
    amount: '$1 900',
    cooking_instructions: '18-05-2020',
    status:<MyDropdown/> ,
  },
  {
    order_id: '0000 0284 7529 4751 8475',
    product_name: '0980 9808 8200 7680',
    amount: '$6 350',
    cooking_instructions: '17-05-2020',
    status:<MyDropdown/> ,
  }
]

const columns = [
  { key: 'column1', name: 'Order ID', fieldName: 'order_id', minWidth: 200, maxWidth: 250, isResizable: true },
  { key: 'column2', name: 'Product Name', fieldName: 'product_name', minWidth: 200, maxWidth: 250, isResizable: true },
  { key: 'column3', name: 'Amount', fieldName: 'amount', minWidth: 200, maxWidth: 250, isResizable: true }, 
  { key: 'column4', name: 'Cooking Instructions', fieldName: 'cooking_instructions', minWidth: 200, maxWidth: 250, isResizable: true },
  { key: 'column5', name: 'Status', fieldName: 'status', minWidth: 200, maxWidth: 250, isResizable: true }
]



const OperationsTable = () => {
  return (
    <div data-is-scrollable={true}>
      <div className={<code data-enlighter-language="raw" class="EnlighterJSRAW">s-Grid-col ms-sm9 ms-xl9 ${classNames.table}</code>}>
        <DetailsList
          items={operations}
          columns={columns}
          selectionMode={0}
        />
      </div>
    </div>
  );
};


export default OperationsTable;
