import { CustomFileClass } from "stdio";
import path from "path";
import { ListaTareas } from "../listaTareas";
import { Tarea } from "../tarea";
import { PRIORIDAD } from "../../enums/prioridad";
import { LoadData } from "./loadData";

function reviver(key: string, value: any) {
    if (key === "fechaVencimiento") {
        return new Date(value);
    } else {
        return value;
    }
}

/**
 * Clase que permite cargar listas de tareas desde formato JSON.
 */
export class LoadDataJSON implements LoadData {
    /**
     * Devuelve la lista de tareas que se encuentra dentro del archivo 'tareasIncompletas.json'.
     * @returns 
     */
    public async loadTareasIncompletas(): Promise<ListaTareas> {
        let listaTareasIncompletas: ListaTareas = new ListaTareas();
        let tarea: Tarea = new Tarea("a", "b", new Date(2024, 11, 5), PRIORIDAD.BAJA, "d", ["e"])
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasIncompletas.json"), "r");
        let jsonString = "";
    
        for await(const line of file.readLine()) {
            jsonString = line;
            tarea = JSON.parse(jsonString, reviver);
            listaTareasIncompletas.push(tarea as Tarea);
        }
        
        file.close();

        return listaTareasIncompletas;
    };

    /**
     * Devuelve la lista de tareas que se encuentra dentro del archivo 'tareasCompletas.json'.
     * @returns 
     */
    public async loadTareasCompletas(): Promise<ListaTareas> {
        let listaTareasIncompletas: ListaTareas = new ListaTareas();
        let tarea: Tarea = new Tarea("a", "b", new Date(2024, 11, 5), PRIORIDAD.BAJA, "d", ["e"])
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasCompletas.json"), "r");
        let jsonString = "";
    
        for await(const line of file.readLine()) {
            jsonString = line;
            tarea = JSON.parse(jsonString, reviver);
            listaTareasIncompletas.push(tarea);
        }
        
        file.close();

        return listaTareasIncompletas;
    }
}   