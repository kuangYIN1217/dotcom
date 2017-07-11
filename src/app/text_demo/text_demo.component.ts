import { Component } from '@angular/core';
import { FileUploader} from "ng2-file-upload";
import {TextService} from "../common/services/text.service";
import {SERVER_URL} from "../app.constants";
@Component({
  selector: 'text_demo',
  styleUrls: ['./css/text_demo.component.css'],
  templateUrl: './templates/text_demo.html',
  providers: [TextService]
})
export class TextDemoComponent {
  textShow:number=1;
  textBtn:number=1;
  uploadBtn:number=1;
  txtValue:string;
  progress:number=0;
  sizeArr:any[]=[];
  size:number=0;
  tip:number=0;
  name:string;
  constructor() {
  }
  public uploader:FileUploader = new FileUploader({
    url: 'https://evening-anchorage-3159.herokuapp.com/api/',
    method: "POST",
    itemAlias: "file",
  });
  selectedFileOnChanged(event:any){
    // 这里是文件选择完成后的操作处理
    console.log(event);
    console.log(event.target.files);
    for(let i in this.uploader.queue){
      if(this.uploader.queue[i].isUploaded){
        continue;
      }else{
        this.uploader.queue[i].onBeforeUpload=()=>{
          //console.log(this.uploader.queue[i].file.name);
        }
        this.getProgress(i);
      }
    }
  }
  changeValue(event:any){
    console.log(event);
    console.log(event.target);
    console.log(event.target.files);
  }
  fileOverBase(event) {
    // 拖拽状态改变的回调函数
  }
  fileDropOver(event) {
    // 文件拖拽完成的回调函数
    console.log(event);
    for(let i in event){
      if(parseInt(i)==NaN){
          break;
      }else{
        for(let j in this.uploader.queue){
          let type = this.uploader.queue[j].file.name.split('.').pop().toLowerCase();
          if(event[i].name==this.uploader.queue[j].file.name){
            if(type=='txt'||type=='doc'||type=='docx'||type=='pdf'){
              this.getProgress(j);
            }else{
              this.uploader.queue[j].remove();
            }
          }
        }
      }
    }
  }
  getProgress(j){
    this.uploader.queue[j].onProgress = (progress: number)=>{
      this.progress=0;
      this.uploader.queue[j].progress = progress;
      if(this.uploader.queue[j].progress==100){
        setTimeout(()=>{
          this.uploader.queue[j].headers.flag=1;
        }, 300);
      }
    };
    this.uploader.queue[j].onCancel = (response: string, status: number)=>{
      this.uploader.queue[j].remove();
    };
    this.uploader.queue[j].upload();
  }
  result(){
    console.log(this.uploader.queue);
    for(let i in this.uploader.queue){
      this.sizeArr.push(this.uploader.queue[i].file.size);
      this.size+=this.uploader.queue[i].file.size;
      if(this.uploader.queue[i].progress!=100){
        this.uploader.queue[i].remove();
      }
    }
   if((this.size/1024/1024)>50){
      this.tip=1;
      return false;
   }
  }
  cancel(){
    this.tip=0;
  }
  textChange(){
    if(this.txtValue.length>0){
      this.textBtn=2;
    }else{
      this.textBtn=1;
    }
  }
  textDemo(){
    this.textShow=1;
  }
  uploadText(){
    this.textShow=2;
  }
  bigText(){
    this.textShow=3;
  }
}

