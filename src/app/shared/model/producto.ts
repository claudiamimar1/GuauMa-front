export class Producto {
    idProducto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    nombreCategoria: string;
    usuario: {
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
}