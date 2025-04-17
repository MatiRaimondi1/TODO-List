import { ListaTareas } from "../../src/clases/listaTareas";
import { OrdenarPorTag } from "../../src/clases/ordenadorDeTareas/ordenarPorTag";
import { Tarea } from "../../src/clases/tarea";
import { PRIORIDAD } from "../../src/enums/prioridad";

describe("Tests unitarios para la clase OrdenarPorTag", () => {
    let lista: ListaTareas;
    let ordenador: OrdenarPorTag
    let tarea1: Tarea;
    let tarea2: Tarea;
    let tarea3: Tarea;

    beforeEach(() => {
        lista = new ListaTareas();
        ordenador = new OrdenarPorTag;
        tarea1 = new Tarea("A", "Mi Descripcion", new Date(2024, 11, 15), PRIORIDAD.BAJA, "micategoria", ["a"])
        tarea2 = new Tarea("B", "Mi Descripcion", new Date(2024, 11, 16), PRIORIDAD.MEDIA, "micategoria", ["b"])
        tarea3 = new Tarea("C", "Mi Descripcion", new Date(2024, 11, 17), PRIORIDAD.ALTA, "micategoria", ["c"])
    });

    test("Prueba de InsertOrdered: insertar en la Mitad", () =>{ 
        lista.push(tarea1);
        lista.push(tarea3);
        ordenador.insertOrdered(lista, tarea2);
        expect(lista.pop()).toStrictEqual(tarea3);
        expect(lista.pop()).toStrictEqual(tarea2);
    });

    test("Prueba de Ordenar por tag", () => {
        lista.push(tarea1);
        lista.push(tarea2);
        ordenador.sort(lista);
        expect(lista.pop()).toStrictEqual(tarea2);
    });
})