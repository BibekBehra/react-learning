import React from 'react';
 
const  authContext = React.createContext({
    totalPrice:4,
    disabledInfo:'',
    purchasable:false,
    Additem:(type)=>{},
    RemoveItem:()=>{}
});

 export default authContext;