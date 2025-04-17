import { mock } from "jest-mock-extended";
import { EditadorDeTareas } from "../src/clases/EditadorDeTareas";
import { ListaTareas } from "../src/clases/listaTareas";
import { NodeTarea } from "../src/clases/nodeTarea";
import { Tarea } from "../src/clases/tarea";
import { PRIORIDAD } from "../src/enums/prioridad";
import { ESTADO } from "../src/enums/estado";

describe("Tests unitarios para la clase EditadorDeTareas", () => {

    let listaTareasMock: ReturnType<typeof mock<ListaTareas>>;
    let tareaMock: ReturnType<typeof mock<Tarea>>;
    let nodeTareaMock: ReturnType<typeof mock<NodeTarea>>;
    let editador: EditadorDeTareas;

    beforeEach(() => {
        listaTareasMock = mock<ListaTareas>();
        tareaMock = mock<Tarea>();
        nodeTareaMock = mock<NodeTarea>();

        let valueMock = tareaMock;
        Object.defineProperty(nodeTareaMock, "value", {
            get: () => valueMock,
            set: (newValue) => {
                valueMock = newValue;
            },
        });

        listaTareasMock.search.mockReturnValue(nodeTareaMock);

        editador = new EditadorDeTareas();
    });

    test("Editar el título de una tarea existente", () => {
        tareaMock.getTitle.mockReturnValue("Titulo antiguo");
        tareaMock.setTitle.mockImplementation((newTitle) => {
            tareaMock.getTitle.mockReturnValue(newTitle);
        });

        editador.editTitle(listaTareasMock, tareaMock, "Nuevo titulo");
        expect(tareaMock.getTitle()).toBe("Nuevo titulo");
    });

    test('Editar el descripcion de tarea existente', () => {
        tareaMock.getDescription.mockReturnValue("Descripcion antigua");
        tareaMock.setDescription.mockImplementation((newDescription) => {
            tareaMock.getDescription.mockReturnValue(newDescription);
        });

        editador.editDescription(listaTareasMock, tareaMock, "Nueva descripcion")
        expect(tareaMock.getDescription()).toBe("Nueva descripcion");
    });

    test('Editar fecha de expiracion de tarea existente', () => {
        const fechaMock = new Date("2024-11-15");
        tareaMock.getExpirationDate.mockReturnValue(fechaMock);
        tareaMock.setExpirationDate.mockImplementation((newExpirationDate) => {
            tareaMock.getExpirationDate.mockReturnValue(newExpirationDate);
        });

        const newFecha = new Date("2024-11-17");
        editador.editExpirationDate(listaTareasMock, tareaMock, newFecha);
        expect(tareaMock.getExpirationDate()).toBe(newFecha);
    });

    test('Editar prioridad de tarea existente', () => {
        tareaMock.getPriority.mockReturnValue(PRIORIDAD.BAJA);
        tareaMock.setPriority.mockImplementation((newPriority) => {
            tareaMock.getPriority.mockReturnValue(newPriority);
        });

        editador.editPriority(listaTareasMock, tareaMock, PRIORIDAD.MEDIA);
        expect(tareaMock.getPriority()).toBe(PRIORIDAD.MEDIA);
    });

    test('Editar Categoria de tarea existente', () => {
        tareaMock.getCategory.mockReturnValue("Categoria antigua");
        tareaMock.setCategory.mockImplementation((newCategory) => {
            tareaMock.getCategory.mockReturnValue(newCategory);
        });

        editador.editCategory(listaTareasMock, tareaMock, "Categoria nueva");
        expect(tareaMock.getCategory()).toBe("Categoria nueva");
    });

    test('Agregar un Tag a una tarea existente', () => {
        tareaMock.getTags.mockReturnValue(["Tag 1"]);
        tareaMock.addTag.mockImplementation((newTag) => {
            tareaMock.getTags.mockReturnValue(["Tag 1", newTag])
        });

        editador.addTag(listaTareasMock, tareaMock, "Tag 2");
        expect(tareaMock.getTags()).toStrictEqual(["Tag 1", "Tag 2"]);
    });

    test("Remover un Tag a una tarea existente", () => {
        tareaMock.getTags.mockReturnValue(["Tag 1", "Tag 2"]);
        tareaMock.removeTag.mockImplementation(() => {
            tareaMock.getTags.mockReturnValue(["Tag 1"])
        });

        editador.removeTag(listaTareasMock, tareaMock, "Tag 2");
        expect(tareaMock.getTags()).toStrictEqual(["Tag 1"])
    });

    test('Editar Percentage de tarea existente', () => {
        tareaMock.getPercentage.mockReturnValue(50);
        tareaMock.setPercentage.mockImplementation((newPercentage) => {
            tareaMock.getPercentage.mockReturnValue(newPercentage);
        });

        editador.editPercentage(listaTareasMock, tareaMock, 99);
        expect(tareaMock.getPercentage()).toBe(99);
    });

    test('Editar Percentage de tarea existente a 100', () => {
        tareaMock.getPercentage.mockReturnValue(99);
        tareaMock.setPercentage.mockImplementation((newPercentage) => {
            tareaMock.getPercentage.mockReturnValue(newPercentage);
            if (newPercentage === 100) {
                tareaMock.getState.mockReturnValue(ESTADO.COMPLETA);
            }
        });

        editador.editPercentage(listaTareasMock, tareaMock, 100);
        expect(tareaMock.getPercentage()).toBe(100);
        expect(tareaMock.getState()).toBe(ESTADO.COMPLETA);
    });

});