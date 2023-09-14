export class Productos {
    exitoso: boolean;
    mensajes: Array<string>;
    data: [
        {
            idProducto: number;
            nombre: string;
            descripcion: string;
            precio: number;
            categoria: {
                idCategoria: number;
                nombre: string;
                descripcion: string;
            };
            usuario: {
                idUsuario: number;
                tipoIdentificacion: string;
                numeroIdentificacion: string;
                nombreRazonSocial: string;
                correo: string;
                celular: string;
                direccion: {
                    idDireccion: number;
                    descripcion: string;
                };
            };
            resenias: {
                comentario: string;
                puntaje: number;
            }
        }
    ];
    codigoHttp: number;
    estadoHttp: string;
}
