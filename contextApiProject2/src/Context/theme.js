import { useContext , createContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
});

export const ThemeProvider = ThemeContext.Provider;


// created a custom hook to use the theme context
export default function useTheme () {
    return useContext(ThemeContext);
}