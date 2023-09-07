export class Usuario {
    exitoso: boolean;
    mensajes: Array<string>;
    data: [
        {
            idUsuario: number;
            tipoIdentificacion: {
                idTipoIdentificacion: number;
                nombre: string;
                descripcion: string;
            };
            numeroIdentificacion: number;
            nombreRazonSocial: string;
            correo: string;
            celular: string;
            direccion: {
                idDireccion: number,
                descripcion: string,
                codigoMunicipio: number
            };
            rol: {
                idRol: number;
                nombre: string;
                descripcion: string;
            }
        }
    ];
    codigoHttp: number;
    estadoHttp: string;
}