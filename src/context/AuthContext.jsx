// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from './AuthReducer';

// const INITIAL_STATE = {
//     currentUser: JSON.parse(localStorage.getItem("user")) || null,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//     useEffect(() => {
//         localStorage.setItem("user", JSON.stringify(state.currentUser));
//     }, [state.currentUser]);

//     return(
//         <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase‐config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
