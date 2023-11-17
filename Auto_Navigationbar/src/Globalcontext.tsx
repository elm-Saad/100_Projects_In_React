import { createContext,useContext, useState } from "react"
import { ContextValueType } from "./interfaces"

const GlobalContextAPI = createContext<ContextValueType|undefined>(undefined)

export const GlobalContext = ({children}: any) =>{
    const [isNavOpen,setIsNavOpen] = useState<boolean>(false)
    // handle NavLG change 
    const [currentPage, setCurrentPage] = useState<string|null>(null)

    const openNav = (): void  =>{
        setIsNavOpen(true)
    }
    const closeNav = (): void =>{
        setIsNavOpen(false)
    }
    const contextValue: ContextValueType = {
        currentPage,
        setCurrentPage,
        isNavOpen,
        openNav,
        closeNav,
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

