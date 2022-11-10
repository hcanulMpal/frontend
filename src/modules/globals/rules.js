export const rules = {
    required:[v => !!v || 'Tipo de dato requerido.'],
    email: [value => !!value || 'Tipo de dato requerido.',
        value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'correo Electrtonico Invalido.'
    }],
    min: [v => v.length >= 8 || "Mínimo 8 caracteres"],
}