import React from 'react';
 
const  authContext = React.createContext({
    Authenticated:false,
    isShowPerson:false,
    Additem:()=>{},
    RemoveItem:()=>{}
});

 export default authContext;