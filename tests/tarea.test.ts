import { Tarea } from "../src/clases/tarea";
import { ESTADO } from "../src/enums/estado";
import { PRIORIDAD } from "../src/enums/prioridad";

describe("Tests unitarios para la clase Tarea", () => {
    let tarea: Tarea;

    beforeEach(() => {
        tarea = new Tarea("Tarea de ejemplo", "Descripción de prueba", new Date(2024, 11, 5), PRIORIDAD.MEDIA, "Categoría 1", ["tag1", "tag2"]);
    });

    test("Deberia devolver el título de la tarea", () => {
        expect(tarea.getTitle()).toBe("Tarea de ejemplo");
    });

    test("Deberia devolver la descripción de la tarea", () => {
        expect(tarea.getDescription()).toBe("Descripción de prueba");
    });

    test("Deberia devolver la fecha de vencimiento de la tarea", () => {
        expect(tarea.getExpirationDate()).toEqual(new Date(2024, 11, 5));
    });

    test("Deberia devolver la prioridad de la tarea", () => {
        expect(tarea.getPriority()).toBe(PRIORIDAD.MEDIA);
    });

    test("Deberia devolver las etiquetas de la tarea", () => {
        expect(tarea.getTags()).toEqual(["tag1", "tag2"]);
    });

    test("Deberia devolver el porcentaje de avance de la tarea", () => {
        expect(tarea.getPercentage()).toBe(0);
    });

    test("Deberia devolver el estado de la tarea", () => {
        expect(tarea.getState()).toBe(ESTADO.INCOMPLETA);
    });

    test("Deberia actualizar el título de la tarea", () => {
        tarea.setTitle("Nuevo título");
        expect(tarea.getTitle()).toBe("Nuevo título");
    });

    test("Deberia actualizar la descripción de la tarea", () => {
        tarea.setDescription("Nueva descripción");
        expect(tarea.getDescription()).toBe("Nueva descripción");
    });

    test("Deberia actualizar la fecha de vencimiento de la tarea", () => {
        const nuevaFecha = new Date(2025, 5, 15);
        tarea.setExpirationDate(nuevaFecha);
        expect(tarea.getExpirationDate()).toEqual(nuevaFecha);
    });

    test("Deberia actualizar la prioridad de la tarea", () => {
        tarea.setPriority(PRIORIDAD.ALTA);
        expect(tarea.getPriority()).toBe(PRIORIDAD.ALTA);
    });

    test("Deberia actualizar la categoría de la tarea", () => {
        tarea.setCategory("Nueva categoría");
        expect(tarea.getCategory()).toBe("Nueva categoría");
    });

    test("Deberia agregar un nuevo tag a la tarea", () => {
        tarea.addTag("tag3");
        expect(tarea.getTags()).toEqual(["tag1", "tag2", "tag3"]);
    });

    test("Deberia eliminar un tag de la tarea", () => {
        tarea.removeTag("tag1");
        expect(tarea.getTags()).toEqual(["tag2"]);
    });

    test("Deberia actualizar el porcentaje de avance de la tarea", () => {
        tarea.setPercentage(50);
        expect(tarea.getPercentage()).toBe(50);
    });

    test("Deberia actualizar el estado de la tarea", () => {
        tarea.setState(ESTADO.COMPLETA);
        expect(tarea.getState()).toBe(ESTADO.COMPLETA);
    });
});