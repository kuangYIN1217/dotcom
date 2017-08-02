import { Component } from '@angular/core';
import {FileItem, FileUploader} from "ng2-file-upload";
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
  errorPaths:any[]=[];
  error:string;
  fileError:number=0;
  k:number=0;
  deleteArr:any[]=[];
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

    //this.deleteItem();
    for(let j in this.uploader.queue){
           let bool = this.isInArray(this.showArr,this.uploader.queue[j]);
          if(bool==false){
             this.showArr.push(this.uploader.queue[j]);
             this.getProgress(j);
             //this.getSuccess(j);
          }else{
            continue;
           }
        }
    this.upload();
       // console.log(this.showArr);
  }
    upload(){
    if(this.showArr.length==0){
      this.uploadBtn=1;
    }else if(this.showArr.length>0){
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
    //this.deleteArr.splice(i,1);
    for(let j in this.errorPaths){
        if(this.showArr[i].file.name==this.errorPaths[j]){
          this.errorPaths.splice(Number(j),1);
        }
        console.log(this.showArr[i].file.name);
      }
      //this.uploader.queue[i].remove();
      if(this.uploader.queue[i].isUploading){
        this.uploader.queue[i].cancel();
        this.uploader.queue[i].remove();
      }else{
        this.uploader.queue[i].remove();
      }

      //this.deleteArr.push(this.uploader.queue[i]);
      if(this.showArr.length==0){
        this.uploadBtn=1;
      }
  }
  fileOverBase(event) {
    // 拖拽状态改变的回调函数
  }
  fileDropOver(event) {
    // 文件拖拽完成的回调函数
    //this.deleteItem();

/*    this.uploader.onAfterAddingAll=(fileItems: any)=>{
      //this.deleteArr=fileItems;
      for(let i in fileItems){
        this.showArr.push(fileItems[i]);
        //this.deleteArr.push(fileItems[i]);
      }
      console.log(this.showArr);
      //this.getProgress();
      //this.getSuccess();
    }*/
    for(let j in this.uploader.queue){
      if(Number(j)>9){
        return
      }else{
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
      console.log(this.uploader.queue);
    }
    this.upload();
  }
/*  contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return true;
    }
  }
  return false;
}*/
getSuccess(j){
    this.uploader.queue[j].onSuccess = (response: any, status: any, headers: any) => {
      //console.log(response);
      if(JSON.parse(response).errorPaths){
        this.errorPaths.push(JSON.parse(response).errorPaths);
      }
      this.resultArr.push(JSON.parse(response).content);
      this.allFlow=this.allFlow+JSON.parse(response).flow;
      let b = this.resultArr.join(',');
      let c = this.errorPaths.join(',');
      if(j==this.uploader.queue.length-1){
        this.content = b;
        this.error = c;
        this.flow = this.allFlow.toString();
      }
  }
}
/*  getProgress(){
      this.uploader.uploadAll();
      this.uploader.onProgressItem=(fileItem: FileItem, progress: any)=>{
      //console.log(fileItem);
      if(progress==100){
        setTimeout(()=>{
          fileItem.headers.flag=1;
        }, 300);
      }
      //console.log(progress);
    };
      console.log(this.uploader.queue);

 /!*     let bool = this.contains(this.uploader.queue,item);
      if(bool===false){
       console.log(this.uploader.queue.indexOf(item));
      }*!/
/!*      if(JSON.parse(response).errorPaths){
        this.errorPaths.push(JSON.parse(response).errorPaths);
      }
      this.resultArr.push(JSON.parse(response).content);
      this.allFlow=this.allFlow+JSON.parse(response).flow;
      let b = this.resultArr.join(',');
      let c = this.errorPaths.join(',');
      if(this.uploader.queue.length-1){
        this.content = b;
        this.error = c;
        this.flow = this.allFlow.toString();
      }*!/
/!*      for(let j in this.uploader.queue){
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
          if(JSON.parse(response).errorPaths){
            this.errorPaths.push(JSON.parse(response).errorPaths);
          }
          this.resultArr.push(JSON.parse(response).content);
          this.allFlow=this.allFlow+JSON.parse(response).flow;
          let b = this.resultArr.join(',');
          let c = this.errorPaths.join(',');
          if(Number(j)==this.uploader.queue.length-1){
            this.content = b;
            this.error = c;
            this.flow = this.allFlow.toString();
          }
        };
      }*!/
  }*/
  getProgress(j){
    if(j>9){
      this.showArr.splice(10,1);
      return
    }else{
      this.uploader.onProgressItem=(fileItem: FileItem, progress: any)=>{
        this.progress=0;
        if(progress==100){
          setTimeout(()=>{
            fileItem.headers.flag=1;
          }, 300);
        }
/*        this.uploader.queue[j].progress = progress;
        if(this.uploader.queue[j].progress==100){
          setTimeout(()=>{
            this.uploader.queue[j].headers.flag=1;
          }, 300);
        }*/
      };
      this.uploader.queue[j].onSuccess = (response: any, status: any, headers: any) => {
        if(JSON.parse(response).errorPaths){
          this.errorPaths.push(JSON.parse(response).errorPaths);
        }
        this.resultArr.push(JSON.parse(response).content);
        this.allFlow=this.allFlow+JSON.parse(response).flow;
        let b = this.resultArr.join(',');
        let c = this.errorPaths.join(',');
        console.log(this.uploader.queue.length);
        console.log(j);
        if(j==this.uploader.queue.length){
          this.content = b;
          this.error = c;
          this.flow = this.allFlow.toString();
        }
      };
      //this.uploader.uploadAll();
      this.uploader.queue[j].upload();
    }
  }
  deleteItem(){
    for(let i in this.deleteArr){
      this.isNone(this.deleteArr[i]);
    }
  }
isNone(item){
    for(let i in this.uploader.queue){
      if(item.file.name==this.uploader.queue[i].file.name){
        this.uploader.queue[i].remove();
        return
      }
    }
}
  result(){
    //this.deleteItem();
    for(let i in this.uploader.queue){
      if(Number(i)>9){
        continue
      }else{
        this.sizeArr.push(this.uploader.queue[i].file.size);
        this.size+=this.uploader.queue[i].file.size;
        if(this.uploader.queue[i].progress!=100){
          this.uploader.queue[i].remove();
        }
      }
    }
    if((this.size/1024/1024)>50){
      this.tip=1;
      return false;
    }
    this.uploadBtn=3;
    this.removeBtn=2;
    console.log(this.error);
    if(this.errorPaths.length>0){
      this.fileError = 1;
      this.removeBtn=1;
      this.uploadBtn=2;
    }else{
      this.textService.setFile(this.content,'file',1,2000,this.flow)
        .subscribe(result=>{
          this.uploadBtn=4;
          this.fileId = result;
        })
    }

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
    this.fileError=0;
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

