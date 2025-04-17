import {ListaTareas} from "./clases/listaTareas";
import {LoadDataJSON} from "./clases/persistencia/loadDataJSON";

async function main() {
    let loadDataJSON: LoadDataJSON;
    loadDataJSON = new LoadDataJSON()
    let listaTareaTest: ListaTareas
    listaTareaTest = new ListaTareas();

    listaTareaTest = await loadDataJSON.loadTareasIncompletas();
    console.log(listaTareaTest)
}

main()