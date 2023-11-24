import { createContext, useContext ,useState} from "react"
import { ContextValueType } from "./interfaces"


// set up a global context 

const GlobalContextAPI = createContext<ContextValueType|undefined>(undefined)


export const GlobalContext = ({children}: any) =>{
    
    const [DarkTheme,setDarkTheme] = useState<boolean>(false)


    const ToggleDarkTheme = () =>{
        const newTheme = !DarkTheme
        setDarkTheme(newTheme)
        document.body.classList.toggle('dark-mode',newTheme)
    }

    const contextValue: ContextValueType = {
        name:'saad',
        ToggleDarkTheme,
        DarkTheme
    }
    return <GlobalContextAPI.Provider value={contextValue}>
        {children}
    </GlobalContextAPI.Provider>
}


// custom hook

export const useContextAPI = (): ContextValueType=>{
    const contextAPI =  useContext(GlobalContextAPI)
    if (!contextAPI) {
        throw new Error("useContextAPI must be used within a GlobalApp provider")
    }
    return contextAPI
}