import { Component, OnInit } from '@angular/core';
import { DashboardService, Venta } from '../servicios/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   ventas:Venta[] = [];
  constructor(private _dashboardService: DashboardService) { 
    //console.log("Creando el componente dashboard..")
    console.log(_dashboardService.getVentas());
    this.ventas = _dashboardService.getVentas();
    console.log(this.ventas[0]);
  }

  ngOnInit(): void {
  }

}
