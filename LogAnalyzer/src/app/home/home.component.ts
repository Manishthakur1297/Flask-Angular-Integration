import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../Services/rest.service';
import { shiftInitState } from '@angular/core/src/view';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs : RestService) { }

  ngOnInit()
  {

  }

  file:any;
  file_text: any;
  fileChanged($event) 
  {
    this.file = $event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (file) => {
      this.file_text = fileReader.result
      console.log(this.file_text);
    }
    fileReader.readAsText(this.file);
  }

      sendFile(f, format)
      {
        var a = f.split("\\");
        var file_name = a[a.length-1];
        // console.log(a)
        // console.log(format)
        // console.log(this.file_text)
        
        this.rs.readFile(this.file_text, file_name, format)
        .subscribe
        (
          (response) => 
          {
            console.log(response);
            
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