// import React, { createContext } from 'react';
// import useFirebase from '../Hooks/useFirebase';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const allContext = useFirebase();
//     return (
//         <AuthContext.AuthProvider value={allContext}>
//             {children}
//         </AuthContext.AuthProvider>
//     );
// };

// export default AuthProvider;
import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;