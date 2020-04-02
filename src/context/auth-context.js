import React from 'react';
 
const  authContext = React.createContext({
    totalPrice:4,
    disabledInfo:'',
    purchasable:false,
    show:false,
    Additem:(type)=>{},
    RemoveItem:()=>{},
    showOrderSummary:()=>{},
    removeOrderSummary:()=>{},
    ingredients:''
    
});

 export default authContext;