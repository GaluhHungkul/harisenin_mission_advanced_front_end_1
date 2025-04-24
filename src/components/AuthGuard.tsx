import { ReactNode, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const AuthGuard = ({children} : { children : ReactNode }) => {

    const location = useLocation()

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        if(location.pathname === "/login" || location.pathname === "/register") {
            setIsLoading(false)
            return
        } else {

            const isLoggedIn = localStorage.getItem("userId")
            if (!isLoggedIn) {
                navigate("/login")
            } else {
                setIsLoading(false)
            }
        }
        
       
    }, [location.pathname, navigate])

    if (isLoading) {
        return <div className="fixed text-center font-bold text-2xl text-white content-center h-screen">Loading...</div> 
    }

    return <>{children}</>
}

export default AuthGuard
