import { createContext,useContext,useState } from "react"
import { GlobalContextType } from "./interfaces"


const GlobalContextAPI = createContext<GlobalContextType | undefined>(undefined)


export const GlobalApp = ({children}: any)=>{

    const [Navbar,setNavbar] = useState<boolean>(false)
    const [Modal,setModal] = useState<boolean>(false)

    const openNav = ():void=>{
        setNavbar(true)
    }
    const closeNav = ():void=>{
        setNavbar(false)
    }
    const openModal = ():void=>{
        setModal(true)
    }
    const closeModal = ():void=>{
        setModal(false)
    }

    const contextValue: GlobalContextType = {
        Navbar,
        openNav,
        closeNav,
        Modal,
        openModal,
        closeModal,
    }
    return <GlobalContextAPI.Provider value={contextValue}>
        {children}
    </GlobalContextAPI.Provider>
}

// custom hook

export const useContextAPI = (): GlobalContextType=>{
    const context =  useContext(GlobalContextAPI)
    if (!context) {
        throw new Error("useContextAPI must be used within a GlobalApp provider")
    }
    return context
}
