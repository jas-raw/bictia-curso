export interface NewInmuebleI{
    "tipo": string
    "no_habitaciones": number
    "patio": boolean
    "no_pisos": number
    "sector": string
    "cocina_intergral": boolean
    "descripcion": string
    "valor": number
    "imagenes": Array<string>
    "no_banos": number
}

export interface InmuebleI{
    "tipo": string
    "no_habitaciones": number
    "patio": boolean
    "no_pisos": number
    "sector": string
    "cocina_intergral": boolean
    "descripcion": string
    "valor": number
    "imagenes": Array<string>
    "no_banos": number
    "nombre_asesor": string
    "telefono_asesor": number
}