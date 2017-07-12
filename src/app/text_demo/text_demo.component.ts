import { Component } from '@angular/core';
import { FileUploader} from "ng2-file-upload";
import {TextService} from "../common/services/text.service";
import {SERVER_URL} from "../app.constants";
import {Router} from "@angular/router";
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
  showArr:any[]=[];
  id:number;

  constructor(private textService: TextService,private router:Router) {
/*    this.uploader.onAfterAddingAll = function (fileItems) {
      this.showArr = fileItems;
    }*/
  }
  public uploader:FileUploader = new FileUploader({
    url: 'https://evening-anchorage-3159.herokuapp.com/api/',
    method: "POST",
    itemAlias: "file",
  });
  selectedFileOnChanged(event:any){

    // 这里是文件选择完成后的操作处理
        for(let j in this.uploader.queue){
           let bool = this.isInArray(this.showArr,this.uploader.queue[j]);
           if(bool==false){
             this.showArr.push(this.uploader.queue[j]);
             this.getProgress(j);
           }else{
             continue;
           }
        }
       // console.log(this.showArr);
    /*     for(let i in this.uploader.queue){
     if(this.uploader.queue[i].isUploaded){
        continue;
      }else{
        this.uploader.queue[i].onBeforeUpload=()=>{
          console.log(this.uploader.queue[i].file.name);
        }
        this.getProgress(i);
      }
    }*/
  }
  isInArray(arr,value){
    for(var i = 0; i < arr.length; i++){
      if(value === arr[i]){
        return true;
      }
    }
    return false;
  }
  remove(i){
    this.showArr.splice(i,1);
    this.uploader.queue[i].remove();
  }
  fileOverBase(event) {
    // 拖拽状态改变的回调函数
  }
  fileDropOver(event) {
    // 文件拖拽完成的回调函数
    /*     for(let i in event){
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
    }*/
    for(let j in this.uploader.queue){
      let bool = this.isInArray(this.showArr,this.uploader.queue[j]);
      if(bool==false){
        this.showArr.push(this.uploader.queue[j]);
        let type = this.showArr[j].file.name.split('.').pop().toLowerCase();
        if (type == 'txt' || type == 'doc' || type == 'docx' || type == 'pdf') {
          this.getProgress(j);
        } else {
          this.showArr.splice(Number(j),1);
          this.uploader.queue[j].remove();
        }
      }else{
        continue;
      }
    }
  }
  getProgress(j){
    if(this.uploader.queue[j]){
    this.uploader.queue[j].onProgress = (progress: number)=>{
      this.progress=0;
        this.uploader.queue[j].progress = progress;
        if(this.uploader.queue[j].progress==100){
          setTimeout(()=>{
            this.uploader.queue[j].headers.flag=1;
          }, 300);
      }
    };
/*    this.uploader.queue[j].onCancel = (response: string, status: number)=>{
      this.uploader.queue[j].remove();
    };*/
    }
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
  textStart(content){
    this.textBtn=3;
    this.textService.setText(content)
      .subscribe(result=>{
        this.id = result;
        this.textBtn=4;
        console.log(this.id);
      });
  }
  analysisResult(){
    this.router.navigate(['/text_result'],{queryParams: { id: this.id}});
  }
  cancel(){
    this.tip=0;
  }
  textChange(){
    if(this.txtValue){
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

