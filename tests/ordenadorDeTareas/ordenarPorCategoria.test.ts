import { ListaTareas } from "../../src/clases/listaTareas";
import { OrdenarPorCategoria } from "../../src/clases/ordenadorDeTareas/ordenarPorCategoria";
import { Tarea } from "../../src/clases/tarea";
import { PRIORIDAD } from "../../src/enums/prioridad";

describe("Tests unitarios para la clase OrdenarPorCategoria", () => {
    let lista: ListaTareas;
    let ordenador: OrdenarPorCategoria
    let tarea1: Tarea;
    let tarea2: Tarea;
    let tarea3: Tarea;

    beforeEach(() => {
        lista = new ListaTareas();
        ordenador = new OrdenarPorCategoria;
        tarea1 = new Tarea("A", "Mi Descripcion", new Date(2024, 11, 15), PRIORIDAD.BAJA, "a", ["mietiqueta"])
        tarea2 = new Tarea("B", "Mi Descripcion", new Date(2024, 11, 16), PRIORIDAD.MEDIA, "b", ["mietiqueta"])
        tarea3 = new Tarea("C", "Mi Descripcion", new Date(2024, 11, 17), PRIORIDAD.ALTA, "c", ["mietiqueta"])
    });

    test("Prueba de InsertOrdered: insertar en la Mitad", () =>{ 
        lista.push(tarea1);
        lista.push(tarea3);
        ordenador.insertOrdered(lista, tarea2);
        expect(lista.pop()).toStrictEqual(tarea3);
        expect(lista.pop()).toStrictEqual(tarea2);
    });

    test("Prueba de ordenar por categoria", () => {
        lista.push(tarea1);
        lista.push(tarea2);
        ordenador.sort(lista);
        expect(lista.pop()).toStrictEqual(tarea2);
    });
})