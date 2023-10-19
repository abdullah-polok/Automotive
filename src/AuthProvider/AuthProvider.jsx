import { createContext, useState } from "react";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [brandName, setBrandName] = useState([])
    const userInfo = { brandName, setBrandName }

    console.log(brandName);
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;