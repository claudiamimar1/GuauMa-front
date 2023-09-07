export class Departamento {
    exitoso: boolean;
    mensajes: Array<string>;
    data: [
        {
            idDepartamento: number,
            codigo: number,
            nombre: string,
            pais: {
                idPais: number;
                nombre: string;
                codigo: string;
            }
        }
    ];
    codigoHttp: number;
    estadoHttp: string;
}
