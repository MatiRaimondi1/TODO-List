import { ORDENADOR } from "../enums/ordenador";
import { NodeTarea } from "./nodeTarea";
import { OrdenadorDeTareas } from "./ordenadorDeTareas/interfazOrdenador";
import { OrdenarPorCategoria } from "./ordenadorDeTareas/ordenarPorCategoria";
import { OrdenarPorFechaDeVencimiento } from "./ordenadorDeTareas/ordenarPorFechaDeVencimiento";
import { OrdenarPorPrioridad } from "./ordenadorDeTareas/ordenarPorPrioridad";
import { OrdenarPorTag } from "./ordenadorDeTareas/ordenarPorTag";
import { OrdenarPorTitulo } from "./ordenadorDeTareas/ordenarPorTitulo";
import { Tarea } from "./tarea";

/**
 * Clase que permite la simulación de la estructura de datos Lista.
 */
export class ListaTareas {
    private head: NodeTarea;
    private ordenador: OrdenadorDeTareas
    
    constructor() {
        this.head = undefined as unknown as NodeTarea;
        this.ordenador = new OrdenarPorTitulo
    }

    /**
     * Permite obtener el primer nodo de la lista.
     * @returns 
     */
    public getHead():NodeTarea{
        return this.head
    }
    
    /**
     * Permite establecer el primer nodo de la lista.
     * @param value nodo a establecer.
     */
    public setHead(value: NodeTarea){
        this.head = value;
    }

    /**
     * Agrega un nodo de tipo Tarea al final de la lista.
     * @param value tarea a definir en el nodo.
     */
    public push(value: Tarea): NodeTarea {
        const node = new NodeTarea(value);
        let headAux = this.head;
        while(headAux && headAux.next) {
            headAux = headAux.next;
        }
        if (!headAux) {
            this.head = node
        } else {
            headAux.next = node;
        }
        return node;
    }
    
    /**
     * Elimina y devuelve el último nodo de la lista.
     * @returns 
     */
    public pop(): Tarea {
        let value = undefined;
        let headAux = this.head;
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.next) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = undefined as unknown as NodeTarea;
        } else {
            previous.next = undefined as unknown as NodeTarea;
        }
        value = headAux.value;
        return value;
    }

    /**
     * Agrega un nodo de tipo Tarea delante del primer nodo de la lista y lo devuelve.
     * @param value tarea a definir en el nodo.
     * @returns 
     */
    public insertFirst(value: Tarea): NodeTarea {
        const node = new NodeTarea(value);
        node.next = this.head;
        this.head = node;
        return node;
    }

    /**
     * Permite eliminar y devolver el primer nodo de la lista.
     * @returns 
     */
    public removeFirst(): Tarea {
        let value = undefined as unknown as Tarea;
        if (this.head) {
            value = this.head.value;
            this.head = this.head.next;
        }
        return value;
    }


  
    /**
     * Permite eliminar el nodo que contiene el valor pasado por parametro.
     * @param value valor del nodo a eliminar.
     * @returns 
     */
    public delete(value: Tarea): Tarea {
        let headAux = this.head;
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.value !== value) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = headAux.next;
        } else {
            previous.next = headAux.next;
        }
        return headAux.value;
    }
    
    /**
     * Permite buscar y devolver el nodo que contenga el valor pasado por parametro.
     * @param value valor del nodo a buscar.
     * @returns 
     */
    public search(value: Tarea): NodeTarea {
        let headAux = this.head;
        while(headAux && headAux.value !== value) {
            headAux = headAux.next;
        }
        return headAux;
    }

    /**
     * Permite vaciar la lista.
     */
    public clear(): void {
        while(this.head){
            this.removeFirst();
        }
    }

    /**
     * Permite establecer el ordenador que va a ser usado por la lista.
     * * @param estrategia estrategia a utilizar.
     */
    public setOrdenador(estrategia: ORDENADOR):void{
        if(estrategia === ORDENADOR.TITULO){
            this.ordenador = new OrdenarPorTitulo;
        } else if (estrategia === ORDENADOR.FECHAVENCIMIENTO){
            this.ordenador = new OrdenarPorFechaDeVencimiento;
        } else if (estrategia === ORDENADOR.PRIORIDAD){
            this.ordenador = new OrdenarPorPrioridad;
        } else if (estrategia === ORDENADOR.CATEGORIA){
            this.ordenador = new OrdenarPorCategoria;
        } else if (estrategia === ORDENADOR.ETIQUETA){
            this.ordenador = new OrdenarPorTag;
        }
    }
    /**
     * Permite ordenar la lista en base al ordenador establecido.
     */
    public sort():void{
        this.ordenador.sort(this);
    }
}   