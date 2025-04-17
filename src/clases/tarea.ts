import { ESTADO } from "../enums/estado";
import { PRIORIDAD } from "../enums/prioridad";

/**
 * Clase tarea, contiene todas las propiedades necesarias para simular una tareaa.
 */
export class Tarea {
    private titulo: string;
    private descripcion: string;
    private fechaVencimiento: Date;
    private prioridad: PRIORIDAD;
    private categoria: string;
    private etiquetas: string[];
    private porcentaje: number;
    private estado: string;

    /**
     * Constructor de la clase Tarea.
     * @param titulo el titulo de la tarea.
     * @param descripcion la descripción de la tarea.
     * @param fechaVencimiento la fecha de expiración de la tarea.
     * @param prioridad la prioridad de la tarea.
     * @param categoria la categoria de la tarea.
     * @param etiquetas los tags de la tarea.
     */
    constructor(titulo: string, descripcion: string, fechaVencimiento: Date, prioridad: PRIORIDAD, categoria: string, etiquetas: string[]) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
        this.prioridad = prioridad;
        this.categoria = categoria;
        this.etiquetas = etiquetas;
        this.porcentaje = 0;
        this.estado = ESTADO.INCOMPLETA;
    }

    /**
     * Devuelve el titulo de la tarea.
     * @returns 
     */
    public getTitle(): string {
        return this.titulo;
    }

    /**
     * Establece el titulo de la tarea.
     * @param titulo titulo a establecer.
     */
    public setTitle(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     * Devuelve la descripción de la tarea.
     * @returns 
     */
    public getDescription(): string {
        return this.descripcion;
    }

    /**
     * Establece la descripción de la tarea.
     * @param descripcion descripción a establecer.
     */
    public setDescription(descripcion: string): void {
        this.descripcion = descripcion;
    }

    /**
     * Devuelve la fecha de expiración de la tarea.
     * @returns 
     */
    public getExpirationDate(): Date {
        return this.fechaVencimiento;
    }

    /**
     * Establece la fecha de expiración de la tarea.
     * @param fechaVencimiento fecha de expiración a establecer.
     */
    public setExpirationDate(fechaVencimiento: Date): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    /**
     * Devuelve la prioridad de la tarea.
     * @returns 
     */
    public getPriority(): PRIORIDAD {
        return this.prioridad;
    }

    /**
     * Establece la prioridad de la tarea.
     * @param prioridad prioridad a establecer.
     */
    public setPriority(prioridad: PRIORIDAD): void {
        this.prioridad = prioridad;
    }

    /**
     * Devuelve la categoria de la tarea.
     * @returns 
     */
    public getCategory(): string {
        return this.categoria;
    }

    /**
     * Establece la categoria de la tarea.
     * @param categoria categoria a establecer.
     */
    public setCategory(categoria: string): void {
        this.categoria = categoria;
    }

    /**
     * Devuelve los tags de la tarea.
     * @returns 
     */
    public getTags(): string[] {
        return this.etiquetas;
    }

    /**
     * Agreaga un tag a la tarea.
     * @param etiqueta tag a establecer.
     */
    public addTag(etiqueta: string): void {
        this.etiquetas.push(etiqueta);
    }

    /**
     * Elimina un tag de la tarea.
     * @param etiqueta tag a eliminar.
     */
    public removeTag(etiqueta:string):void{
        this.etiquetas.splice(this.etiquetas.indexOf(etiqueta), 1)
    }

    /**
     * Devuelve el porcentaje de avance de la tarea.'
     * @returns 
     */
    public getPercentage(): number {
        return this.porcentaje;
    }

    /**
     * Establece el porcentaje de avance de la tarea.
     * @param porcentaje porcentaje a establecer.
     */
    public setPercentage(porcentaje: number): void {
        this.porcentaje = porcentaje;
    }

    /**
     * Devuelve el estado de la tarea.
     * @returns 
     */
    public getState(): string {
        return this.estado;
    }

    /**
     * Establece el estado de la tarea.
     * @param estado estado a establecer.
     */
    public setState(estado: string): void {
        this.estado = estado;
    }
}