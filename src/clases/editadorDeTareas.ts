import { ESTADO } from "../enums/estado";
import { ListaTareas } from "./listaTareas";
import { NodeTarea } from "./nodeTarea";
import { Tarea } from "./tarea";

/**
 * Clase para editar tareas dentro de una lista utilizando ciertos parametros.
 */
export class EditadorDeTareas{
    constructor(){
    }

    /**
     * Edita el titulo de una tarea especifica que se encuentra dentro de una lista especificada.
     * @param list lista en donde se encuentra la tarea a editar.
     * @param task tarea a editar.
     * @param title nuevo titulo de la tarea.
     */
    public editTitle(list:ListaTareas, task:Tarea, title:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);

        if(listTarea !== null){
            listTarea.value.setTitle(title);
        }
    }

    /**
     * Edita la descripción de una tarea especifica que se encuentra dentro de una lista especificada.
     * @param list lista en donde se encuentra la tarea a editar.
     * @param task tarea a editar.
     * @param Desc nueva descripción de la tarea.
     */
    public editDescription(list:ListaTareas, task:Tarea, Desc:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setDescription(Desc);
        }
    }

    /**
     * Edita la fecha de expiración de una tarea especifica que se encuentra dentro de una lista especificada.
     * @param list lista en donde se encuentra la tarea a editar.
     * @param task tarea a editar.
     * @param expDate nueva fecha de expiración de la tarea.
     */
    public editExpirationDate(list:ListaTareas, task:Tarea, expDate:Date){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setExpirationDate(expDate);
        }
    }

    /**
     * Edita la prioridad de una tarea especifica que se encuentra dentro de una lista especificada.
     * @param list lista en donde se encuentra la tarea a editar.
     * @param task tarea a editar.
     * @param prio nueva prioridad de la tarea.
     */
    public editPriority(list:ListaTareas, task:Tarea, prio:number){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setPriority(prio);
        }
    }

    /**
     * Edita la categoria de una tarea especifica que se encuentra dentro de una lista especificada.
     * @param list lista en donde se encuentra la tarea a editar.
     * @param task tarea a editar.
     * @param category nueva categoria de la tarea.
     */
    public editCategory(list:ListaTareas, task:Tarea, category:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setCategory(category);
        }
    }

    /**
     * Agrega un tag a una tarea especifica que se encuentra dentro de una lista especificada.
     * @param list lista en donde se encuentra la tarea a editar.
     * @param task tarea a editar.
     * @param tag tag a agregar.
     */
    public addTag(list:ListaTareas, task:Tarea, tag:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.addTag(tag);
        }
    }

    /**
     * Elimina un tag de una tarea especifica que se encuentra dentro de una lista especificada.
     * @param list lista en donde se encuentra la tarea a editar.
     * @param task tarea a editar.
     * @param tag tag a eliminar.
     */
    public removeTag(list:ListaTareas, task:Tarea, tag:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.removeTag(tag);
        }
    }

    /**
     * Edita el porcentaje de avance de una tarea especifica que se encuentra dentro de una lista especificada.
     * @param list lista en donde se encuentra la tarea a editar.
     * @param task tarea a editar.
     * @param percentage nuevo porcentaje de avance de la tarea.
     */
    public editPercentage(list:ListaTareas, task:Tarea, percentage:number){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setPercentage(percentage);
            if (percentage === 100) {
                listTarea.value.setState(ESTADO.COMPLETA);
            }
        }
    } 
}