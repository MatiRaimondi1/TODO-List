import {Tarea} from "./tarea";

/**
 * Clase que funciona como nodo con el que trabajan las listas.
 */
export class NodeTarea {
    private _value: Tarea;
    private _next: NodeTarea;

    /**
     * Constructor del nodo.
     * @param value tarea que hará de valor en el nodo.
     */
    constructor(value: Tarea) {
        this._value = value;
        this._next = undefined as unknown as NodeTarea;
    }

    /**
     * Devuelve la tarea almacenada en el nodo.
     */
    public get value(): Tarea {
        return this._value;
    }
    
    /**
     * Devuelve el nodo siguiente.
     */
    public get next(): NodeTarea {
        return this._next;
    }

    /**
     * Establece el nodo siguiente.
     * @param n nodo a establecer.
     */
    public set next(n: NodeTarea) {
        this._next = n;
    }
}