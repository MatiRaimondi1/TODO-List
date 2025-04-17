import { SaveDataJSON } from "../../src/clases/persistencia/SaveDataJSON";
import path from "path";
import { Tarea } from "../../src/clases/tarea";

const mockOpen = jest.fn();
const mockWriteToFile = jest.fn();
const mockClose = jest.fn();

jest.mock("stdio", () => {
    return {
        CustomFileClass: jest.fn().mockImplementation(() => {
            return {
                open: mockOpen,
                writeToFile: mockWriteToFile,
                close: mockClose,
            };
        }),
    };
});

describe("Tests unitarios para la clase SaveDataJSON", () => {
    let saveDataJSON: SaveDataJSON;
    let tareaMock: Tarea;

    beforeEach(() => {
        saveDataJSON = new SaveDataJSON();

        tareaMock = {
            titulo: "Prueba1",
            descripcion: "descripcion",
            fechaVencimiento: "2024-12-03T03:00:00.000Z",
            prioridad: 0,
            categoria:"Categoria1",
            etiqueta:["Tag1"],
            porcentaje:0,
            estado:"Incompleta",
            toJSON: jest.fn().mockReturnValue({
                titulo: "Prueba1",
                descripcion: "descripcion",
                fechaVencimiento: "2024-12-03T03:00:00.000Z",
                prioridad: 0,
                categoria:"Categoria1",
                etiqueta:["Tag1"],
                porcentaje:0,
                estado:"Incompleta",
            }),
        } as unknown as Tarea;

        jest.clearAllMocks();
    });

    test("saveTareaIncompleta debe abrir, escribir y cerrar correctamente", () => {
        saveDataJSON.saveTareaIncompleta(tareaMock);

        expect(mockOpen).toHaveBeenCalledWith(path.resolve("tareasIncompletas.json"), "a");
        expect(mockWriteToFile).toHaveBeenCalledWith(JSON.stringify(tareaMock));
        expect(mockClose).toHaveBeenCalled();
    });

    test("saveTareaCompleta debe abrir, escribir y cerrar correctamente", () => {
        saveDataJSON.saveTareaCompleta(tareaMock);

        expect(mockOpen).toHaveBeenCalledWith(path.resolve("tareasCompletas.json"), "a");
        expect(mockWriteToFile).toHaveBeenCalledWith(JSON.stringify(tareaMock));
        expect(mockClose).toHaveBeenCalled();
    });
});