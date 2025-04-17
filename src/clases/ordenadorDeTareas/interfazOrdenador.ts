import { ListaTareas } from "../listaTareas"
import { Tarea } from "../tarea"

/**
 * Firma de los metodos para ordenar listas.
 */
export interface OrdenadorDeTareas{
    sort(list:ListaTareas):void
    insertOrdered(list:ListaTareas, value: Tarea):void
}