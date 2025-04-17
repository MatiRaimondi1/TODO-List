import { mock } from "jest-mock-extended";
import { ListaTareas } from "../src/clases/listaTareas"
import { BuscadorDeTareas } from "../src/clases/buscadorDeTareas"
import { Tarea } from "../src/clases/tarea"
import { errorTareaNoExiste } from "../src/excepciones/errorTareaNoExiste";
import { NodeTarea } from "../src/clases/nodeTarea";


describe("Tests unitarios para la clase BuscadorDeTareas", () => {

  let listaTareasMock: ReturnType<typeof mock<ListaTareas>>;
  let tareaMock1: ReturnType<typeof mock<Tarea>>;
  let nodeTareaMock1: ReturnType<typeof mock<NodeTarea>>;
  let tareaMock2: ReturnType<typeof mock<Tarea>>;
  let nodeTareaMock2: ReturnType<typeof mock<NodeTarea>>;
  let buscador: BuscadorDeTareas;

  beforeEach(() => {
    listaTareasMock = mock<ListaTareas>();
    tareaMock1 = mock<Tarea>();
    nodeTareaMock1 = mock<NodeTarea>();
    tareaMock2 = mock<Tarea>();
    nodeTareaMock2 = mock<NodeTarea>();

    let valueMock1 = tareaMock1;
    Object.defineProperty(nodeTareaMock1, "value", {
      get: () => valueMock1,
      set: (newValue) => {
        valueMock1 = newValue;
      },
    });
    Object.defineProperty(nodeTareaMock1, "next", {
      get: () => nodeTareaMock2
    })

    let valueMock2 = tareaMock2;
    Object.defineProperty(nodeTareaMock2, "value", {
      get: () => valueMock2,
      set: (newValue) => {
        valueMock2 = newValue;
      },
    });

    listaTareasMock.getHead.mockReturnValue(nodeTareaMock1);
    buscador = new BuscadorDeTareas;
  })

  test("Prueba de buscar una tarea por titulo", () => {
    tareaMock1.getTitle.mockReturnValue("Tarea 1");
    tareaMock2.getTitle.mockReturnValue("Tarea 2");
    expect(buscador.searchByTitle(listaTareasMock, "Tarea 1")).toBe(tareaMock1);
  })

  test("Prueba de buscar una tarea con titulo inexistente", () => {
    tareaMock1.getTitle.mockReturnValue("Tarea 1");
    tareaMock2.getTitle.mockReturnValue("Tarea 2");
    try {
      buscador.searchByTitle(listaTareasMock, "Titulo invalido");
    } catch (error) {
      expect(error).toBeInstanceOf(errorTareaNoExiste);
    }
  })

  test("Prueba de buscar una tarea por fecha de vencimiento", () => {
    const fechaMock1 = new Date("2024-11-15");
    const fechaMock2 = new Date("2024-11-17");
    tareaMock1.getExpirationDate.mockReturnValue(fechaMock1);
    tareaMock2.getExpirationDate.mockReturnValue(fechaMock2);
    expect(buscador.searchByExpirationDate(listaTareasMock, fechaMock1)).toStrictEqual([tareaMock1]);
  })

  test("Prueba de buscar una tarea con fecha de vencimiento inexistente", () => {
    const fechaMock1 = new Date("2024-11-15");
    const fechaMock2 = new Date("2024-11-17");
    const fechaMockInvalida = new Date("2023-11-17");
    tareaMock1.getExpirationDate.mockReturnValue(fechaMock1);
    tareaMock2.getExpirationDate.mockReturnValue(fechaMock2);
    try {
      buscador.searchByExpirationDate(listaTareasMock, fechaMockInvalida);
    } catch (error) {
      expect(error).toBeInstanceOf(errorTareaNoExiste);
    }
  })

  test("Prueba de buscar una tarea por categoria", () => {
    tareaMock1.getCategory.mockReturnValue("a");
    tareaMock2.getCategory.mockReturnValue("b");
    expect(buscador.searchByCategory(listaTareasMock, "a")).toStrictEqual([tareaMock1]);
  })

  test("Prueba de buscar una tarea con categoria inexistente", () => {
    tareaMock1.getCategory.mockReturnValue("a");
    tareaMock2.getCategory.mockReturnValue("b");
    try {
      buscador.searchByTitle(listaTareasMock, "h");
    } catch (error) {
      expect(error).toBeInstanceOf(errorTareaNoExiste);
    }
  })

  test("Prueba de buscar una tarea por tag", () => {
    tareaMock1.getTags.mockReturnValue(["a", "b"]);
    tareaMock2.getTags.mockReturnValue(["c", "d"]);
    expect(buscador.searchByTag(listaTareasMock, "c")).toStrictEqual([tareaMock2])
  })

  test("Prueba de buscar una tarea con tag inexistente", () => {
    tareaMock1.getTags.mockReturnValue(["a", "b"]);
    tareaMock2.getTags.mockReturnValue(["c", "d"]);
    try {
      buscador.searchByTag(listaTareasMock, "j");
    } catch (error) {
      expect(error).toBeInstanceOf(errorTareaNoExiste);
    }
  })

  
})