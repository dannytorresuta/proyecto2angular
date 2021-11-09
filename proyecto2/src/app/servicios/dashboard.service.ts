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
        },
        {
            nombre: "Medical Pro WP Theme",
            estado: "TAX",
            fecha: "April 20, 2021",
            precio: -24
        },
        {
            nombre: "Hosting press html",
            estado: "SALE",
            fecha: "April 21, 2021",
            precio: 24
        },
        {
            nombre: "Digital Agency PSD",
            estado: "SALE",
            fecha: "April 23, 2021",
            precio: -14
        },
        {
            nombre: "Helping Hands WP Theme",
            estado: "MEMBER",
            fecha: "April 22, 2021",
            precio: 64
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