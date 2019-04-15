import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private rs : RestService, private elementRef: ElementRef) { }

  arr:any;
  file_format:any;
  chart_type = [{title : "Line Chart", name : "line"}, {title : "Bar Chart", name : "bar"}, {title : "Pie Chart", name : "pie"}, 
  {title : "Doughnut Chart", name : "doughnut"}, {title : "Radar Chart", name : "radar"},
  {title : "Polar Area Chart", name : "polarArea"}];
  res : any;

  file_format1:any;
  display : boolean = false;
  column : any ;

  onChange(item)
  {
    this.barChartType = item;
  }

  onColumnChange(col)
  {
    this.column = col;
    this.rs.pieChart(col)
    .subscribe
        (
          (response) => 
          {
            console.log(response);
            var keys = response[0];
            var values = response[1];
            this.display = true;
            this.barChartLabels = keys;
            this.barChartData =[
              {data: values, label: col}
            ]

          },
          (error) =>
          {
            console.log("File doesn't exist..." + error);
            alert("File doesn't exist...");
          }

        )
  }

  ngOnInit() {

    this.res = this.rs.responseData;
    this.file_format = this.res[1];
    this.column = this.file_format[0];
    this.onColumnChange(this.column);
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels : any;
  public barChartType : String = "line";
  public barChartLegend = true;

  
  public barChartData : any;

  // visualizeQuery(col, chart_type)
  // {
  //   console.log(chart_type);
  //   this.rs.pieChart(col)
  //   .subscribe
  //       (
  //         (response) => 
  //         {
  //           console.log(response);
  //           var keys = response[0];
  //           var values = response[1];
  //           this.display = true;
  //           //this.barChartType = chart_type;
  //           this.barChartLabels = keys;
  //           this.barChartData =[
  //             {data: values, label: col}
  //           ]

  //         },
  //         (error) =>
  //         {
  //           console.log("File doesn't exist..." + error);
  //           alert("File doesn't exist...");
  //         }

  //       )
  // }

}