import { Tarea } from "../tarea";

/**
 * Firma de los metodos para guardar datos.
 */
export interface SaveData {
    saveTareaIncompleta(tarea: Tarea): void;
    saveTareaCompleta(tarea: Tarea): void;
}