import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

   const [user,setUser] = useState(null);

   useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
   },[])

   const login = (data)=>{
    localStorage.setItem("token",data.token);
    localStorage.setItem("user",JSON.stringify(data.user));
    setUser(data);
   }

   const logout = ()=>{
    localStorage.clear();
    setUser(null);

   }
  return (
    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider