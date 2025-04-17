import {Tarea} from "../src/clases/tarea";
import {ListaTareas} from "../src/clases/listaTareas";
import { PRIORIDAD } from "../src/enums/prioridad";
import {MainApp} from "../src/clases/mainApp";

describe('Tests de la clase mainApp', () => {    

    let mainApp: MainApp;
    let expDate: Date;
    let tarea: Tarea;

    beforeEach(() => {
        mainApp = new MainApp();
        expDate = new Date(2024, 10, 31);
        tarea = new Tarea("Prueba", "Descripcion", expDate, PRIORIDAD.BAJA, "Categoria", ["Tag"])
    })

    test('Añadir tarea a la lista de tareas.', () => {
        mainApp.addTask(tarea);
        const listaTareas = mainApp.getTareasIncompletas()
        expect(listaTareas.pop()).toBe(tarea);
    });

    test('Remover tarea de la lista de tareas', () => {
        mainApp.addTask(tarea);
        expect(mainApp.removeTask(tarea)).toBe(tarea);
    });

    test('Obtener lista de tareas completas', () => {
        expect(mainApp.getTareasCompletas()).toBeInstanceOf(ListaTareas);
    });

    test('Obtener lista de tareas incompletas', () => {
        expect(mainApp.getTareasIncompletas()).toBeInstanceOf(ListaTareas);
    })
});