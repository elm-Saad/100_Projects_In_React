import { createContext, useContext ,useState, useEffect} from "react"
import { ContextValueType } from "./interfaces"


// set up a global context 

const GlobalContextAPI = createContext<ContextValueType|undefined>(undefined)

// get the prefers Theme for the user
const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches
    const isDarkTheme: boolean = localStorage.getItem('darkTheme') === 'true'
    return isDarkTheme || prefersDarkMode
}

export const GlobalContext = ({children}: any) =>{
    
    const [DarkTheme,setDarkTheme] = useState<boolean>(getInitialDarkMode())
    const [searchValue,setSearchValue] = useState<string>('sky')

    const ToggleDarkTheme = () =>{
        const newTheme = !DarkTheme
        setDarkTheme(newTheme)
        localStorage.setItem('darkTheme',newTheme.toString())
        document.body.classList.toggle('dark-mode',newTheme)
    }

    //initial state of the Theme 
    useEffect(()=>{
        document.body.classList.toggle('dark-mode',DarkTheme)
    },[])

    const contextValue: ContextValueType = {
        ToggleDarkTheme,
        DarkTheme,
        searchValue,
        setSearchValue
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