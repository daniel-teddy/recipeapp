import { useAuth } from "../auth/AuthContext"
import AuthenticatedRoutes from "./authenticated"
import { UnauthenticatedRoutes } from "./unAuthenticated"




export const Routes=()=>{
    const {isUser}=useAuth()
    return(
        <>
        {isUser && <AuthenticatedRoutes/> }
        {!isUser && <UnauthenticatedRoutes/>}
        </>
    )
}