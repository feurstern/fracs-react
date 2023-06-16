import React from 'react'

const test = () => {
    const convertToUpperCase = (str) =>{
        let newStr ="";

         for(let i=0;i<=str.length;i++){
            newStr += str.atChar(i).toUpperCase();
         }
         return newStr;
    }
    
  return (
    <div>
      
    </div>
  )
}

export default test
