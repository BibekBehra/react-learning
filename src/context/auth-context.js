import React from 'react';
 
const  authContext = React.createContext({
    totalPrice:4,
    disabledInfo:'',
    Additem:(type)=>{},
    RemoveItem:()=>{}
});

 export default authContext;