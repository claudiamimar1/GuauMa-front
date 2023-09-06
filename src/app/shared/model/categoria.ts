export class Categoria {
    exitoso: boolean;
    mensajes: Array<string>;
    data: [
        {
            idCategoria: number;
            nombre: string;
            descripcion: string;
        }
    ];
    codigoHttp: number;
    estadoHttp: string;
}