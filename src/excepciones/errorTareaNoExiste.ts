/**
 * Excepcion a lanzar cuando una tarea especificada no existe.
 */
export class errorTareaNoExiste extends Error {
    constructor(message:string){
        super(message);
    }
}