import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import type { IConta } from "../api"

interface IAppContext {
    conta: IConta | undefined,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [conta, setConta] = useState<IConta>()
    const storage = getAllLocalStorage()

    useEffect(() => {
        if (storage) {
            const { login, conta } = JSON.parse(storage)
            setIsLoggedIn(login)
            setConta(conta)
        }
    }, [])

    return (
        <AppContext.Provider value={{ conta, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}