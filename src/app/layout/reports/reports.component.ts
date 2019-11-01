import { Component, OnInit } from '@angular/core';
declare var $:any;
// let CanvasJS:any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $('#demo-datepicker-2').datepicker();
    
  }
}