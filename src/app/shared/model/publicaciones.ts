export class Publicaciones {
    exitoso: boolean;
    mensajes: Array<string>;
    data: [
        {
            idPublicacion: number;
            titulo: string;
            descripcion: string;
            fecha: Date;
            usuario: {
                idUsuario: number;
                tipoIdentificacion: {
                    idTipoIdentificacion: number;
                    nombre: string;
                    descripcion: string
                };
                numeroIdentificacion: number;
                nombreRazonSocial: string;
                correo: string;
                celular: number;
                direccion: {
                    idDireccion: number;
                    descripcion: string;
                    codigoMunicipio: number
                };
                rol: {
                    idRol: number;
                    nombre: string;
                    descripcion: string
                }

            }
        }
    ];
    codigoHttp: number;
    estadoHttp: string;
}
