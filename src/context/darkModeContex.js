import { createContext, useReducer } from "react"
import darkModeReducer from "./darkModeReducer"

const INITIAL_STATE = {
    darkMode: false
}

export const DarkModeContex = createContext(INITIAL_STATE)

export const DarkModeContexProvider = ({ children }) => {
    const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);
    return (
        <DarkModeContex.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContex.Provider>
    )
}