export class Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    nombreCategoria: string;
    usuario: {
        tipoIdentificacion: {
            idTipoIdentificacion: number;
            nombre: string;
            descripcion: string;
        };
        numeroIdentificacion: number;
    }
}