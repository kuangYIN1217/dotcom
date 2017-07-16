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
  SERVER_URL = SERVER_URL;
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
  fileId:number;
  content:string;
  resultArr:any[]=[];
  allFlow:number=0;
  flow:string;
  removeBtn:number=1;
  constructor(private textService: TextService,private router:Router) {

  }
  public uploader:FileUploader = new FileUploader({
    url: SERVER_URL+"/api/Files/uploadFile?appId=1",
    method: "POST",
    itemAlias: "file",
  });
  selectedFileOnChanged(event:any){
    // 这里是文件选择完成后的操作处理
    //console.log(this.uploader.queue.length);
        this.upload();
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
  }

    upload(){
    if(this.uploader.queue.length==0){
      this.uploadBtn=1;
    }else if(this.uploader.queue.length>0){
      this.uploadBtn=2;
    }
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
   //this.uploader.removeFromQueue(this.uploader.queue[i]);
    this.uploader.queue[i].remove();
  }
  fileOverBase(event) {
    // 拖拽状态改变的回调函数
  }
  fileDropOver(event) {
    // 文件拖拽完成的回调函数
    this.upload();
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
    if(j>9){
      this.remove(j);
    }else{
      this.uploader.queue[j].onProgress = (progress: number)=>{
        this.progress=0;
        this.uploader.queue[j].progress = progress;
        if(this.uploader.queue[j].progress==100){
          setTimeout(()=>{
            this.uploader.queue[j].headers.flag=1;
          }, 300);
        }
      };
      this.uploader.queue[j].onSuccess = (response: any, status: any, headers: any) => {
        this.resultArr.push(JSON.parse(response).content);
        this.allFlow=this.allFlow+JSON.parse(response).flow;
        let b = this.resultArr.join(',');
        if(j==this.uploader.queue.length-1){
          this.content = b;
          this.flow = this.allFlow.toString();
        }
      };
      this.uploader.uploadAll();
      //this.uploader.queue[j].upload();
    }

  }
  result(){
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
    this.uploadBtn=3;
    this.removeBtn=2;
    this.textService.setFile(this.content,'file',1,2000,this.flow)
      .subscribe(result=>{
        this.uploadBtn=4;
        this.fileId = result;
      })
  }
  textStart(content){
    this.textBtn=3;
    this.textService.setText(content)
      .subscribe(result=>{
        this.id = result;
        this.textBtn=4;
        //console.log(this.id);
      });
  }
  analysisResult(){
    this.router.navigate(['/text_result'],{queryParams: { id: this.id}});
  }
  analysisFile(){
    this.router.navigate(['/text_result'],{queryParams: { id: this.fileId}});
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

