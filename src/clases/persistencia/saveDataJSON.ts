import { CustomFileClass } from "stdio";
import path from "path";
import { Tarea } from "../tarea";
import { SaveData } from "./saveData";

/**
 * Clase que permite guardar tareas en formato JSON.
 */
export class SaveDataJSON implements SaveData {
    /**
     * Guarda una tarea en el archivo 'tareasIncompletas.json'.
     * @param tarea tarea a guardar.
     */
    public saveTareaIncompleta(tarea: Tarea): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasIncompletas.json"), "a");
        file.writeToFile(JSON.stringify(tarea));
        file.close();
    };

    /**
     * Guarda una tarea en el archivo 'tareasCompletas.json'.
     * @param tarea tarea a guardar.
     */
    public saveTareaCompleta(tarea: Tarea): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasCompletas.json"), "a");
        file.writeToFile(JSON.stringify(tarea));
        file.close();
    }
}   