import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var CanvasJS;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
    
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title:{
        text: ""
      },
      axisY: {
        title: ""
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Total App Downloads: 70",
        dataPoints: [      
          { y: 300878, label: "Venezuela" },
          { y: 266455,  label: "Saudi" },
          { y: 169709,  label: "Canada" },
          { y: 158400,  label: "Iran" },
          { y: 142503,  label: "Iraq" },
          { y: 101500, label: "Kuwait" },
          { y: 97800,  label: "UAE" },
          { y: 80000,  label: "Russia" }
        ]
      }]
    });
    var chart2 = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title:{
        text: ""
      },
      axisY: {
        title: ""
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Total No. of Employees: 70",
        dataPoints: [      
          { y: 300878, label: "Venezuela" },
          { y: 266455,  label: "Saudi" },
          { y: 169709,  label: "Canada" },
          { y: 158400,  label: "Iran" },
          { y: 142503,  label: "Iraq" },
          { y: 101500, label: "Kuwait" },
          { y: 97800,  label: "UAE" },
          { y: 80000,  label: "Russia" }
        ]
      }]
    });

    var chart3 = new CanvasJS.Chart("chartContainer3", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title:{
        text: ""
      },
      axisY: {
        title: ""
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Total Risk Assessment Sheet: 5",
        dataPoints: [      
          { y: 300878, label: "Venezuela" },
          { y: 266455,  label: "Saudi" },
          { y: 169709,  label: "Canada" },
          { y: 158400,  label: "Iran" },
          { y: 142503,  label: "Iraq" },
          { y: 101500, label: "Kuwait" },
          { y: 97800,  label: "UAE" },
          { y: 80000,  label: "Russia" }
        ]
      }]
    });
    
    chart.render();
    chart2.render();
    chart3.render();
    
    });


  }

}
