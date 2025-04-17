import { ListaTareas } from "../src/clases/listaTareas"
import { Tarea } from "../src/clases/tarea";
import { ORDENADOR } from "../src/enums/ordenador";
import { PRIORIDAD } from "../src/enums/prioridad";

describe("Prueba de la Lista de Tareas", () => {

    let lista: ListaTareas
    let tarea1: Tarea;
    let tarea2: Tarea;
    let tarea3: Tarea;
    let tarea4: Tarea;
    let expdate1: Date;
    let expdate2: Date;


    beforeEach(() => {
        expdate1 = new Date(2024, 11, 20)
        expdate2 = new Date(2024, 11, 24)
        lista = new ListaTareas()
        tarea1 = new Tarea("A", "Mi Descripcion", expdate1, PRIORIDAD.ALTA, "micategoria", ["mietiqueta"])
        tarea2 = new Tarea("B", "Mi Descripcion", expdate1, PRIORIDAD.BAJA, "micategoria", ["mietiqueta"])
        tarea3 = new Tarea("C", "Mi Descripcion", expdate2, PRIORIDAD.MEDIA, "micategoria", ["mietiqueta"])
        tarea4 = new Tarea("D", "Mi Descripcion", expdate2, PRIORIDAD.BAJA, "micategoria", ["mietiqueta"])
    })

    it("Prueba de la lista para ordenarse usando el metodo sort dentro de la misma lista: Ordenar por Titulo", () => {
        lista.push(tarea2)
        lista.push(tarea4)
        lista.push(tarea1)
        lista.push(tarea3)
        lista.setOrdenador(ORDENADOR.TITULO)
        lista.sort()
        expect(lista.pop()).toStrictEqual(tarea4)
        expect(lista.pop()).toStrictEqual(tarea3)
        expect(lista.pop()).toStrictEqual(tarea2)
        expect(lista.pop()).toStrictEqual(tarea1)
    })
    it("Prueba de la lista para ordenarse usando el metodo sort dentro de la misma lista: Ordenar por Fecha de Vencimiento", () => {
        lista.push(tarea2)
        lista.push(tarea4)
        lista.push(tarea1)
        lista.push(tarea3)
        lista.setOrdenador(ORDENADOR.FECHAVENCIMIENTO)
        lista.sort()
        expect(lista.pop().getExpirationDate()).toBe(expdate2)
        expect(lista.pop().getExpirationDate()).toBe(expdate2)
        expect(lista.pop().getExpirationDate()).toBe(expdate1)
        expect(lista.pop().getExpirationDate()).toBe(expdate1)
    })
    it("Prueba de la lista para ordenarse usando el metodo sort dentro de la misma lista: Ordenar por Prioridad", () => {
        lista.push(tarea2)
        lista.push(tarea4)
        lista.push(tarea1)
        lista.push(tarea3)
        lista.setOrdenador(ORDENADOR.PRIORIDAD)
        lista.sort()
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.ALTA)
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.MEDIA)
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.BAJA)
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.BAJA)
    })

    it("Prueba de cambiar la estrategia de ordenamiento", () => {
        lista.push(tarea4)
        lista.push(tarea1)
        lista.setOrdenador(ORDENADOR.TITULO)
        lista.sort()
        expect(lista.pop()).toStrictEqual(tarea4)
        expect(lista.pop()).toStrictEqual(tarea1)
        lista.push(tarea2)
        lista.push(tarea3)
        lista.setOrdenador(ORDENADOR.PRIORIDAD)
        lista.sort()
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.MEDIA)
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.BAJA)
    })

})