import { mock } from "jest-mock-extended";
import { Estadisticas } from "../src/clases/estadisticas";
import { ListaTareas } from "../src/clases/listaTareas";
import { NodeTarea } from "../src/clases/nodeTarea";
import { Tarea } from "../src/clases/tarea";
import { errorTareaNoExiste } from "../src/excepciones/errorTareaNoExiste";

describe("Tests unitarios para la clase Estadisticas", () => {
    let estadisticas: Estadisticas;
    let listaTareasPendientesMock: ReturnType<typeof mock<ListaTareas>>;
    let listaTareasCompletasMock: ReturnType<typeof mock<ListaTareas>>;
    let tareaMock1: ReturnType<typeof mock<Tarea>>;
    let nodeTareaMock1: ReturnType<typeof mock<NodeTarea>>;
    let tareaMock2: ReturnType<typeof mock<Tarea>>;
    let nodeTareaMock2: ReturnType<typeof mock<NodeTarea>>;
    let tareaMock3: ReturnType<typeof mock<Tarea>>;
    let nodeTareaMock3: ReturnType<typeof mock<NodeTarea>>;
    let tareaMock4: ReturnType<typeof mock<Tarea>>;
    let nodeTareaMock4: ReturnType<typeof mock<NodeTarea>>;

    let listaPendientesVacia: ReturnType<typeof mock<ListaTareas>>;
    let listaCompletasVacia: ReturnType<typeof mock<ListaTareas>>;

    beforeEach(() => {
        estadisticas = new Estadisticas();
        listaTareasPendientesMock = mock<ListaTareas>();
        listaTareasCompletasMock = mock<ListaTareas>();
        nodeTareaMock1 = mock<NodeTarea>();
        nodeTareaMock2 = mock<NodeTarea>();
        nodeTareaMock3 = mock<NodeTarea>();
        nodeTareaMock4 = mock<NodeTarea>();
        tareaMock1 = mock<Tarea>();
        tareaMock2 = mock<Tarea>();
        tareaMock3 = mock<Tarea>();
        tareaMock4 = mock<Tarea>();

        listaPendientesVacia = mock<ListaTareas>();
        listaCompletasVacia = mock<ListaTareas>();

        listaTareasPendientesMock.getHead.mockReturnValue(nodeTareaMock1);
        listaTareasCompletasMock.getHead.mockReturnValue(nodeTareaMock3);

        Object.defineProperty(nodeTareaMock1, "value", {
            get: () => tareaMock1
        });
        Object.defineProperty(nodeTareaMock1, "next", {
            get: () => nodeTareaMock2
        });

        Object.defineProperty(nodeTareaMock2, "value", {
            get: () => tareaMock2
        });

        Object.defineProperty(nodeTareaMock3, "value", {
            get: () => tareaMock3
        });
        Object.defineProperty(nodeTareaMock3, "next", {
            get: () => nodeTareaMock4
        });

        Object.defineProperty(nodeTareaMock4, "value", {
            get: () => tareaMock4
        });


        tareaMock1.getPercentage.mockReturnValue(20);
        tareaMock2.getPercentage.mockReturnValue(30);
    });

    test("Calcular la tasa de finalización de las tareas.", () => {
        const tasaDeFinalizacion = estadisticas.getTasaDeFinalizacion(listaTareasPendientesMock, listaTareasCompletasMock);
        expect(tasaDeFinalizacion).toBe(50);
    });

    test("Atrapar error al intentar calcular la tasa de finalización si no hay tareas pendientes.", () => {
        try {
            const tasaDeFinalizacion = estadisticas.getTasaDeFinalizacion(listaPendientesVacia, listaTareasCompletasMock);
            expect(tasaDeFinalizacion).toBe(50);
        } catch (error) {
            expect(error).toBeInstanceOf(errorTareaNoExiste);
        }
    });

    test("Atrapar error al intentar calcular la tasa de finalización si no hay tareas completas.", () => {
        try {
            const tasaDeFinalizacion = estadisticas.getTasaDeFinalizacion(listaTareasPendientesMock, listaCompletasVacia);
            expect(tasaDeFinalizacion).toBe(50);
        } catch (error) {
            expect(error).toBeInstanceOf(errorTareaNoExiste);
        }
    });

    test("Calcular promedio de porcentajes.", () => {
        const promedioPorcentajes = estadisticas.getPromedioPorcentajes(listaTareasPendientesMock);
        expect(promedioPorcentajes).toBe(25);
    });

    test("Atrapar error al intentar calcular el promedio de porcentajes si no hay tareas pendientes.", () => {
        try {
            const promedioPorcentajes = estadisticas.getPromedioPorcentajes(listaPendientesVacia);
            expect(promedioPorcentajes).toBe(25);
        } catch (error) {
            expect(error).toBeInstanceOf(errorTareaNoExiste);
        }
    });
});