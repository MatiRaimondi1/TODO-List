import { ListaTareas } from "../listaTareas";
import { NodeTarea } from "../nodeTarea";
import { Tarea } from "../tarea";
import { OrdenadorDeTareas } from "./interfazOrdenador";

/**
 * Clase para ordenar tareas dentro de una lista por tag.
 */
export class OrdenarPorTag implements OrdenadorDeTareas{
    /**
     * Ordena una lista por tag.
     * @param list lista a ordenar.
     */
    public sort(list:ListaTareas):void{
        let value: Tarea;
        let listAux = new ListaTareas();
        while(list.getHead()) {
            value = list.removeFirst();
            this.insertOrdered(listAux, value);
        }
        list.setHead(listAux.getHead()) 
        listAux.clear();
    }

    /**
     * Permite insertar el tag de forma ordenada.
     * @param list lista en donde insertar la tarea.
     * @param value tarea a insertar.
     */
    public insertOrdered(list:ListaTareas, value: Tarea):void{
        const node = new NodeTarea(value);
        let headAux = list.getHead();
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.value.getTags() < value.getTags()) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            list.setHead(node);
        } else {
            previous.next = node;
        }
        node.next = headAux
    }
}