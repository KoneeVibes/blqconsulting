import { createContext, useState } from "react";
import { ContextProviderPropsType, ContextType } from "../type/context.type";

export const AppContext = createContext({} as ContextType);

export const AppContextProvider: React.FC<ContextProviderPropsType> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <AppContext.Provider value={{
            openMenu,
            setOpenMenu,
        }}>
            {children}
        </AppContext.Provider>
    )
}