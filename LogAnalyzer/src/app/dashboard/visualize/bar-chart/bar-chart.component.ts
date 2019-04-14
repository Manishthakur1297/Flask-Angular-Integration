import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  
  rD : Array<Number>; 
   l : any;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'pie';
  public barChartLegend = true;

  
  public barChartData : any;
  constructor(private rs : RestService, private auth : AuthService, private router: Router) { }


  ngOnInit() {
    var ll = []
    this.l = this.rs.columnData['Pid']
    console.log(this.l)
    var ln = Object.keys(this.l).length;
    for (var key in this.l)
    {
      let val = this.l[key]
      ll.push(Number(val));
    }
    console.log(ll)
    this.rD = ll;
    console.log(this.rD)
    var data = [28, 48, 40, 19, 86, 27, 90]
    console.log(data)
    this.barChartData =[
      {data: data, label: 'Series A'}//,
      //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
  


    // this.res.visualizeFile("qq","qqw")
    // .subscribe
    //     (
    //       (response) => 
    //       {
    //         console.log(response);
    //         // this.res = this.rs.responseData;
    //         // // this.arr = this.response[0];
    //         // this.arr = response;
    //         // this.file_format1 = this.res[1];
    //       },
    //       (error) =>
    //       {
    //         console.log("File doesn't exist..." + error);
    //         alert("File doesn't exist...");
    //       }
    //     )

    
    // this.rD = this.res.responseData
    // console.log(this.rD)

  }

}
