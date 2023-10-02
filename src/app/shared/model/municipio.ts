export class Municipio {
    exitoso: boolean;
    mensajes: Array<string>;
    data: [
        {
            idMunicipio: number;
            codigo: number;
            nombre: string;
            departamento: {
                idDepartamento: number;
                nombre: string;
                codigo: string;
                pais: {
                    idPais: number;
                    codigo: number;
                    nombre: string;
                }
            }
        }
    ];
    codigoHttp: number;
    estadoHttp: string;
}
