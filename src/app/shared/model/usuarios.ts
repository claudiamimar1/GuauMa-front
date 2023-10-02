export class Usuarios {
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombreRazonSocial: string;
    correo: string;
    contrasenia: string;
    celular: string;
    direccion: {
        descripcion: string;
        codigoMunicipio: number;
    };
    rol: string;
}
