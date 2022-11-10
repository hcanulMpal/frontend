import Store from "@/store/index.js"

import rutasSAdmin from '../helper/rutas'


const rutas_S_admin = ( ) => {
    if ( Store.state.loginModule.rol === 'SUPERADMIN' && Store.state.loginModule.auth ) {
        return rutasSAdmin
    } else {
        return undefined
    }
}

export default rutas_S_admin