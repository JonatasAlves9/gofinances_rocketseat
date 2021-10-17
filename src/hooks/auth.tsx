import React from 'react';
import { createContext, useContext } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface AuthContextData {
    user: User;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const user = {
        id: '1',
        name: 'Jônatas',
        email: 'alvesjonatas99@gmail.com'
    }
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };

