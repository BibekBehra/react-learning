import React from 'react';
 
const  authContext = React.createContext({
    Authenticated:false,
    isShowPerson:false,
    login:()=>{}
});

 export default authContext;