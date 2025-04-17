import { ClearDataJSON } from "../../src/clases/persistencia/ClearDataJSON";
import path from "path";

const mockOpen = jest.fn();
const mockClose = jest.fn();

jest.mock("stdio", () => {
    return {
        CustomFileClass: jest.fn().mockImplementation(() => {
            return {
                open: mockOpen,
                close: mockClose,
            };
        }),
    };
});

describe("Tests unitarios para la clase ClearDataJSON", () => {
    let clearDataJSON: ClearDataJSON;

    beforeEach(() => {
        clearDataJSON = new ClearDataJSON();
        jest.clearAllMocks();
    });

    test("clearTareasIncompletas debe abrir y cerrar tareasIncompletas.json", () => {
        clearDataJSON.clearTareasIncompletas();
        expect(mockOpen).toHaveBeenCalledWith(path.resolve("tareasIncompletas.json"), "w");
        expect(mockClose).toHaveBeenCalled();
    });

    test("clearTareasCompletas debe abrir y cerrar tareasCompletas.json", () => {
        clearDataJSON.clearTareasCompletas();
        expect(mockOpen).toHaveBeenCalledWith(path.resolve("tareasCompletas.json"), "w");
        expect(mockClose).toHaveBeenCalled();
    });
});