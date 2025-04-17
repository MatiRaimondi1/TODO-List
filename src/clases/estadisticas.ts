import { errorTareaNoExiste } from "../excepciones/errorTareaNoExiste";
import { ListaTareas } from "./listaTareas";

/**
 * Clase que permite obtener las estadisticas con respecto a las tareas pendientes.
 */
export class Estadisticas {
    constructor() {

    }

    /**
     * Compara la cantidad de tareas pendientes con la cantidad de tareas completas para devpñver la taza de finalización.
     * @param tareasPendientes lista de tareas pendientes.
     * @param tareasCompletas lista de tareas completas.
     * @returns 
     */
    public getTasaDeFinalizacion(tareasPendientes: ListaTareas, tareasCompletas: ListaTareas): number {
        let countPendientes = 0;
        let countCompletas = 0;
        let pHeadAux = tareasPendientes.getHead();
        let cHeadAux = tareasCompletas.getHead();
        
        if (!pHeadAux) {
            throw new errorTareaNoExiste("La lista está vacia o no existe.");
        }

        if (!cHeadAux) {
            throw new errorTareaNoExiste("La lista está vacia o no existe.");
        }
        
        while (pHeadAux) {
            countPendientes++;
            pHeadAux = pHeadAux.next;
        }

        while (cHeadAux) {
            countCompletas++;
            cHeadAux = cHeadAux.next;
        }

        return (countCompletas / (countCompletas + countPendientes)) * 100;
    }

    /**
     * Recorre la lista de tareas pendientes y devuelve el promedio de los porcentajes de avance.
     * @param tareasPendientes lista de tareas pendientes.
     * @returns 
     */
    public getPromedioPorcentajes(tareasPendientes: ListaTareas): number {
        let headAux = tareasPendientes.getHead();
        let countTareas = 0;
        let countPorcentajes = 0;

        if (!headAux) {
            throw new errorTareaNoExiste("La lista está vacia o no existe.");
        }

        while (headAux && headAux.value) {
            countTareas++;
            countPorcentajes += headAux.value.getPercentage();
            headAux = headAux.next;
        }

        return (countPorcentajes / countTareas);
    }
}