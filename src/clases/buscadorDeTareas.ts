import { error } from "console";
import { errorTareaNoExiste } from "../excepciones/errorTareaNoExiste";
import { ListaTareas } from "./listaTareas";
import { Tarea } from "./tarea";

/*
 * Clase para buscar tareas dentro de una lista utilizando ciertos parametros. 
 */
export class BuscadorDeTareas {
  constructor() {
  }

  /**
   * Busca una tarea dentro de una lista basandose en el titulo especificado y la devuelve.
   * @param list lista en donde buscar la tarea.
   * @param title titulo de la tarea a buscar.
   * @returns 
   */
  public searchByTitle(list: ListaTareas, title: string): Tarea {
    let headAux = list.getHead();

    if (!headAux) {
      throw new errorTareaNoExiste("La lista está vacía o no existe.");
    }

    while (headAux) {
      if (headAux.value && headAux.value.getTitle() === title) {
        return headAux.value;
      }
      headAux = headAux.next;
    }

    throw new errorTareaNoExiste("El parámetro provisto no se encuentra en la lista");
  }

  /**
   * Busca tareas dentro de una lista basandose en la fecha de expiración especificada y las devuelve en un array de tareas.
   * @param list lista en donde buscar las tareas.
   * @param expirationDate fecha de expiración de las tareas a buscar.
   * @returns 
   */
  public searchByExpirationDate(list: ListaTareas, expirationDate: Date): Tarea[] {
    let headAux = list.getHead()
    let tareas: Tarea[];
    tareas = [];

    if (!headAux) {
      throw new errorTareaNoExiste("La lista está vacía o no existe.");
    }

    while (headAux) {
      if (headAux.value && headAux.value.getExpirationDate() === expirationDate) {
        tareas.push(headAux.value);
      }
      headAux = headAux.next;
    }

    if (tareas.length === 0) {
      throw new errorTareaNoExiste("El parametro proveeido no existe en la lista");
    }

    return tareas;
  }

  /**
   * Busca tareas dentro de una lista basandose en la categoria especificada y las devuelve en un array de tareas.
   * @param list lista en donde buscar las tareas.
   * @param category categoria de las tareas a buscar.
   * @returns 
   */
  public searchByCategory(list: ListaTareas, category: string): Tarea[] {
    let headAux = list.getHead();
    let tareas: Tarea[];
    tareas = [];

    if (!headAux) {
      throw new errorTareaNoExiste("La lista esta vacia o no existe.")
    }

    while (headAux) {
      if (headAux.value && headAux.value.getCategory() === category) {
        tareas.push(headAux.value);
      }
      headAux = headAux.next;
    }

    if (tareas.length === 0) {
      throw new errorTareaNoExiste("El parametro proveeido no existe en la lista")
    }

    return tareas;
  }

  public searchByTag(list: ListaTareas, tag: string): Tarea[] {
    let headAux = list.getHead();
    let tareas: Tarea[];
    tareas = [];

    if (!headAux) {
      throw new errorTareaNoExiste("La lista esta vacia o no existe.")
    }

    while (headAux) {
      if (headAux.value && headAux.value.getTags().includes(tag)) {
        tareas.push(headAux.value);
      }
      headAux = headAux.next;
    }

    if (tareas.length === 0) {
      throw new errorTareaNoExiste("El parametro proveeido no existe en la lista")
    }

    return tareas;
  }
}