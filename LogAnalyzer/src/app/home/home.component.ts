import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../Services/rest.service';
import { shiftInitState } from '@angular/core/src/view';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs : RestService, private router : Router) { }

  ngOnInit()
  {

  }


  display : boolean = true;

  file:any;
  file_text: any;
  
  arr:any;
  file_format:any;

  fileChanged($event) 
  {
    this.file = $event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (file) => {
      this.file_text = fileReader.result
      console.log(this.file_text);
    }
    console.log(fileReader.readAsText(this.file));
  }

      sendFile(f, format)
      {
        var a = f.split("\\");
        var file_name = a[a.length-1];
        this.rs.readFile(this.file_text, file_name, format)
        .subscribe
        (
          (response) => 
          {
            console.log(response);
            this.display = false;
            this.arr = response[0];
            this.file_format = response[1];
            //this.router.navigate(['\display']);
          },
          (error) =>
          {
            console.log("File doesn't exist..." + error);
            alert("File doesn't exist...");
          }

        )
      }

    //   @ViewChild('fileInput') fileInput;
    //   uploadFile(f) {
    //     const files: FileList = this.fileInput.nativeElement.files;
    // if (files.length === 0) {
    //   return;
    // };

    // this.rs.parseTable(files).subscribe((data: any) => {
    //   console.log(data);
    // });


    //   }

  }