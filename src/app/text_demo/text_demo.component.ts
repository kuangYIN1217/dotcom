import { Component } from '@angular/core';
import {FileItem, FileUploader} from "ng2-file-upload";
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
  interval: any;
  progress:number=0;
  textArr:any[]=[];
  constructor() {
  }
  public uploader:FileUploader = new FileUploader({
    url: 'https://evening-anchorage-3159.herokuapp.com/api/',
    method: "POST",
    itemAlias: "file",
  });
  selectedFileOnChanged(event){
    // 这里是文件选择完成后的操作处理
    console.log(event.target);
    this.getProgress();
  }

  fileOverBase(event) {
    // 拖拽状态改变的回调函数
  }
  fileDropOver(event) {
    // 文件拖拽完成的回调函数
    console.log(event);
    this.getProgress();
  }
  getProgress(){
    this.progress=0;
    this.uploader.queue[0].onProgress = (progress: number)=> {
      this.progress = progress;
      console.log(this.progress);
    };
    this.uploader.queue[0].upload();
  }
  result(){
    console.log(this.uploader.queue.length);
    for(var i in this.uploader.queue)
    console.log(this.uploader.queue[i].file.size/1024);

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

