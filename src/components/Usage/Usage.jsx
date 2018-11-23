import React from "react";
import Codearea from 'plugins/Codearea';

function Usage({ ...props }) {
  return (
   <div style={{marginTop: '20px'}}>
        <h3>Usage:</h3>
        <Codearea language="js">
            {props.children}
        </Codearea>
    </div>
  );
}


export default Usage;
