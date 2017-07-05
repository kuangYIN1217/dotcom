import { Component } from '@angular/core';
import {FileUploader} from "ng2-file-upload";
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'text_demo',
  styleUrls: ['./css/text_demo.component.css'],
  templateUrl: './templates/text_demo.html'
})
export class TextDemoComponent {
  textShow:number=1;
  textBtn:number=1;
  demoTxt:string;
  uploadBtn:number=1;
  txtValue:string;
  constructor() {
  }
  public uploader:FileUploader = new FileUploader({url: URL});

  selectedFileOnChanged(){
    console.log(1);
    // 这里是文件选择完成后的操作处理
  }
  fileOverBase(event) {
    // 拖拽状态改变的回调函数
  }
  fileDropOver(event) {
    console.log(2);
    // 文件拖拽完成的回调函数
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

