import { Component} from '@angular/core';
import { UploadfileService } from '../services/uploadfile.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent  {
  constructor(public uploadService:UploadfileService,
              public ngxService: NgxUiLoaderService){}
  files: any = [];
  fileData:any=[];
  showDownloadButton:Boolean;
  successMsg:any;

  onFileChange(event) {
    this.resetForm();
    this.files.push(event.target.files[0].name);
    this.fileData.push(event.target.files[0]);
    console.log(this.files);
  }

  uploadFile(){
    if(this.fileData.length>0){
      this.ngxService.start();
      var formdata = new FormData;
      formdata.append('uploadfile',this.fileData[0]);
      console.log(formdata); 
      this.uploadService.uploadFile(formdata).subscribe((res:any)=>{
        console.log(res);
        this.ngxService.stop();
        this.resetForm();
        this.successMsg="File uploadd successfully!!";
        setTimeout(()=>{
          this.successMsg=undefined;
        },3000);
        this.showDownloadButton=true;
      },(err:any)=>{
        console.log(err);
      }); 
    }
  }

  downloadFile(){
    window.open('http://localhost:3000/api/process-file');
   /*  this.uploadService.getFiles().subscribe((res:any)=>{
      console.log(res);
      
    },(err:any)=>{
      console.log(err);
    }) */
  } 
  onDrop(file){
    this.resetForm();
    this.files.push(file[0].name);
    this.fileData.push(file[0]);
  }

  resetForm(){
    this.fileData=[];
    this.files=[];
  }
}
