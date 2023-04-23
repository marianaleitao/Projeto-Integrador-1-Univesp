import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage){
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.username === JSON.parse(userToken).username
            );
            
            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const Login = (username, password ) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter((user) => user.username === username);

        if (hasUser?.length){
            if (hasUser[0].username === username && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({username, token}));
                setUser({username, password});
                return;
            } else {
              return "Usuário ou Senha Incorreto";
            }
        } else {
          return "Usuário sem acesso permitido";
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{user, signed: !!user, Login, logout}}
        >
            {children}
        </AuthContext.Provider>
    );
};

    