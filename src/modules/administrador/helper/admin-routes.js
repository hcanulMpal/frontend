import Store from "@/store/index"

import rutasAdmin from '../helper/rutas'


const rutas_admin = ( ) => {
    if ( Store.state.loginModule.rol === 'ADMINISTRADOR' && Store.state.loginModule.auth ) {
        return rutasAdmin
    } else {
        return undefined
    }
}

export default rutas_admin