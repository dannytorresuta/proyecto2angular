import { Injectable } from '@angular/core';

@Injectable()


export class DashboardService {


    private ventas: Venta[] = [
        {
            nombre: "Elite admin",
            estado: "SALE",
            fecha: "April 18, , 2021",
            precio: 18
        },
        {
            nombre: "Real Homes WP Theme",
            estado: "EXTENDED",
            fecha: "April 19, 2020",
            precio: 20
        },
        {
            nombre: "Ample Admin",
            estado: "EXTENDED",
            fecha: "April 19, 2021",
            precio: 20
        }
    ];

    constructor(){
        console.log("Servicio Dashboard listo para usarse...")
    
    }
    getVentas(): Venta[]{
        return this.ventas;

    }
}

export interface Venta{
    nombre: string;
    estado: string;
    fecha: string;
    precio: number;
};