import { ListaTareas } from "./listaTareas";
import { Tarea } from "./tarea";

/**
 * Clase con los metodos principales para trabajar con tareas.
 */
export class MainApp {
    private listaTareas: ListaTareas;
    private tareasCompletas: ListaTareas;

    constructor() {
        this.listaTareas = new ListaTareas();
        this.tareasCompletas = new ListaTareas();
    }

    /**
     * Inserta una tarea en la lista de tareas.
     * @param tarea tarea a insertar.
     */
    public addTask(tarea: Tarea): void {
        this.listaTareas.push(tarea);
    }

    /**
     * Remueve una tarea de la lista de tareas.
     * @param tarea tarea a remover.
     * @returns
     */
    public removeTask(tarea: Tarea): Tarea {
        return this.listaTareas.delete(tarea);
    }

    /**
     * Devuelve la lista de tareas incompletas.
     * @returns
     */
    public getTareasIncompletas(): ListaTareas {
        return this.listaTareas;
    }

    /**
     * Devuelve la lista de tareas completas.
     * @returns
     */
    public getTareasCompletas(): ListaTareas {
        return this.tareasCompletas;
    }
}