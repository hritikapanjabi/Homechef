import * as React from 'react';
import ReactDOM from 'react-dom';


const MyDropdown=()=>{
  return(
  <select>
            <option value="">--Select Status</option>
            <option value="accept">Accept</option>
            <option value="preparing">Preparing</option>
            <option value="ready">Ready</option>
            <option value="dispatched">Dispatched</option>
            <option value="cancel">Cancel</option>
          </select>
  );
};



export default MyDropdown;
