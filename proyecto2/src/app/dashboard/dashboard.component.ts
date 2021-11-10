import { Component, OnInit } from '@angular/core';
import { DashboardService, Venta, Comentario, Chat_Listing } from '../servicios/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   ventas:Venta[] = [];
   comentarios:Comentario[] = [];
   chat: Chat_Listing[] = [];
  constructor(private _dashboardService: DashboardService) { 
    //console.log("Creando el componente dashboard..")

    console.log(_dashboardService.getVentas());

    this.ventas = _dashboardService.getVentas();
    this.comentarios = _dashboardService.getComentario();
    this.chat = _dashboardService. getChat_Listing();

    console.log(this.ventas[0]);
  }

  ngOnInit(): void {
  }

}
