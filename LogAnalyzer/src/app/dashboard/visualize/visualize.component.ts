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

  LineChart = [];
  d = {};

  ngOnInit() {
    

    this.rs.visualizeFile()
    .subscribe
        (
          (response) => 
          {
            console.log(response);
            //console.log(response[0])
            //console.log(response[1])
            this.d = response[1];
            this.rs.columnData = this.d;
            //console.log(this.rs.columnData)
            // this.res = this.rs.responseData;
            // // this.arr = this.response[0];
            // this.arr = response;
            // this.file_format1 = this.res[1];
          },
          (error) =>
          {
            console.log("File doesn't exist..." + error);
            alert("File doesn't exist...");
          }

        )
    //this.res = this.rs.responseData;
    // this.arr = this.response[0];
    //this.file_format = this.res[1];
    // this.LineChart = new Chart('lineChart' , {

    //   type:'line',
    //   data : {
    //     labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    //     datasets : [{
    //       label : 'No of items sold in Months',
    //       data : [6,2,4,6,9,11,3,22,9,1,7],
    //       fill : false,
    //       lineTension : 0.2,
    //       borderColor : "red",
    //       borderWidth : 1
    //     }]
    //   },
    //   options : {
    //     title : 
    //     {
    //       text : "Line Chart",
    //       display : true
    //     },
    //     scales : {
    //       yAxes : [{
    //         ticks : {
    //           beginAtZero : true
    //         }
    //       }]
    //     }
    //   }
    // })

  }

  chart : any;
  arr:any;
  file_format:any;
  file_format1:any;
  res : any;
  
  // visualizeQuery(col1, col2)
  // {
  //   this.rs.visualizeFile(col1, col2)
  //   .subscribe
  //       (
  //         (response) => 
  //         {
  //           console.log(response);
  //           this.res = this.rs.responseData;
  //           // this.arr = this.response[0];
  //           this.arr = response;
  //           this.file_format1 = this.res[1];
  //         },
  //         (error) =>
  //         {
  //           console.log("File doesn't exist..." + error);
  //           alert("File doesn't exist...");
  //         }

  //       )
  //   //let htmlRef = this.elementRef.nativeElement.querySelector('canvas');
  //   var ctx = document.getElementById("myChart");
  //   this.chart = new Chart(ctx, {

  //     type: 'line',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //      datasets : [
  //        {
  //         //label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         borderColor: "#3cba9f",
  //         fill: false
  //       },
  //       { 
  //         data: [12, 19, 3, 5, 2, 3],
  //         borderColor: "#ffcc00",
  //         fill: false
  //       },
  //         ]
  //       },
  //      options : {
  //        legend : {
  //          display : false
  //        },
  //        scales : {
  //          xAxes : [{
  //            display:true
  //          }],
  //          yAxes : [{
  //            display : true
  //          }],
  //        }
  //      }

  //   });
  // }

}
