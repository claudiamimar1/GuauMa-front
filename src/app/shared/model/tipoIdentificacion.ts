export class TipoIdentificacion {
    exitoso: boolean;
    mensajes: Array<string>;
    data: [
        {
            idTipoIdentificacion: number;
            nombre: string;
            descripcion: string;
        }
    ];
    codigoHttp: number;
    estadoHttp: string;
}
