import { Component, OnInit } from '@angular/core';

import{BasicTableService,Dato} from '../servicios/basic-table.service';
@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {
  datos: Dato[]=[];
  constructor(private _basictableService: BasicTableService) {
    
    this.datos = _basictableService.getDatos();
  
  }

  ngOnInit(): void {
  }

}
