import { createContext, useState, useCallback, useContext } from "react";



interface IDrawerContexData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContexData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

interface IAppThemeProviderProps {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])



    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }} >
            {children}
        </DrawerContext.Provider>
    )
}