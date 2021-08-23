export interface Estado {
    id: number;
    descripcion?: string;
}

export interface Perfil {
    id: number;
    nombre: string;
}

export interface Usuario {
    id?: number;
    idPersona?: number;
    nombre: string;
    login: string;
    email: string;
    esAd: number;
    fechaUltimaSesion?: string;
    estado: Estado;
    perfil?: Perfil;
    clave: string;
    cambioContrasenia?: boolean;
}

export interface Paginacion {
    totalregistros: number;
    totalpagina: number;
}

export interface UsuarioListResponse {
    usuarios: Usuario[];
    paginacion: Paginacion;
}