import { ListaTareas } from "../../src/clases/listaTareas";
import { LoadDataJSON } from "../../src/clases/persistencia/loadDataJSON";

describe("Tests unitarios para la clase LoadDataJSON", () => {
    let lista: ListaTareas;
    let loadDataJSON: LoadDataJSON

    beforeEach(() => {
        lista = new ListaTareas();
        loadDataJSON = new LoadDataJSON();
    });
    
    test("loadTareasIncompletas debe cargar las tareas correctamente en la lista", async () => {
        lista = await loadDataJSON.loadTareasIncompletas();
        expect(JSON.stringify(lista)).toEqual("{\"head\":{\"_value\":{\"titulo\":\"Prueba1\",\"descripcion\":\"Descripcion1\",\"fechaVencimiento\":\"2024-12-03T03:00:00.000Z\",\"prioridad\":0,\"categoria\":\"Categoria1\",\"etiquetas\":[\"Tag1\"],\"porcentaje\":0,\"estado\":\"Incompleta\"}},\"ordenador\":{}}");
    });

    test("loadTareasCompletas debe cargar las tareas correctamente en la lista", async () => {
        lista = await loadDataJSON.loadTareasCompletas();
        expect(JSON.stringify(lista)).toEqual("{\"head\":{\"_value\":{\"titulo\":\"Prueba2\",\"descripcion\":\"Descripcion2\",\"fechaVencimiento\":\"2024-12-04T03:00:00.000Z\",\"prioridad\":0,\"categoria\":\"Categoria1\",\"etiquetas\":[\"Tag1\"],\"porcentaje\":0,\"estado\":\"Incompleta\"}},\"ordenador\":{}}")
    });
})