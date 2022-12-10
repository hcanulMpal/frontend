import Store from "@/store/index.js"
import rutasUser from "../helper/rutas"



const rutas_User = ( ) => {
    if ( Store.state.loginModule.rol === 'USER' && Store.state.loginModule.auth ) {
        return rutasUser
    } else {
        return undefined
    }
}

export default rutas_User