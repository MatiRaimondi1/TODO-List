import { ClearData } from "./clearData";
import { CustomFileClass } from "stdio";
import path from "path";

/**
 * Clase que permite borrar todas las tareas de un archivo JSON.
 */
export class ClearDataJSON implements ClearData {
    /**
     * Elimina todas las tareas del archivo 'tareasIncompletas.json'.
     */
    public clearTareasIncompletas(): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasIncompletas.json"), "w");
        file.close();
    }

    /**
     * Elimina todas las tareas del archivo 'tareasCompletas.json'.
     */
    public clearTareasCompletas(): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasCompletas.json"), "w");
        file.close();
    }
}