import { Component } from '@angular/core';
import {DemoService} from "../common/services/demo.service";
import {TextService} from "../common/services/text.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:[DemoService,TextService]
})
export class DemoComponent{
  address:string;
  crawler:any[]=[];
  fromLanguage:string;
  toLanguage:string;
  translate:string;
  crawlerBtn:string='开始爬取';
  translateBtn:string='开始翻译';
  colorIndex:number=1;
  colorIndexT:number=1;
  fromId:string;
  toId:string;
  newsDate:string;
  newsTitle:string;
  keyWord:string;
  fromLangArr:any=[{'id': 'auto', 'name': '自动检测'},
    {'id': 'zh', 'name': '中文'},
    {'id': 'en', 'name': '英语'},
    {'id': 'yue', 'name': '粤语'},
    {'id': 'wyw', 'name': '文言文'},
    {'id': 'jp', 'name': '日语'},
    {'id': 'kor', 'name': '韩语'},
    {'id': 'fra', 'name': '法语'},
    {'id': 'spa', 'name': '西班牙语'},
    {'id': 'th', 'name': '泰语'},
    {'id': 'ara', 'name': '阿拉伯语'},
    {'id': 'ru', 'name': '俄语'},
    {'id': 'pt', 'name': '葡萄牙语'},
    {'id': 'de', 'name': '德语'},
    {'id': 'it', 'name': '意大利语'},
    {'id': 'el', 'name': '希腊语'},
    {'id': 'nl', 'name': '荷兰语'},
    {'id': 'pl', 'name': '波兰语'},
    {'id': 'bul', 'name': '保加利亚语'},
    {'id': 'est', 'name': '爱沙尼亚语'},
    {'id': 'dan', 'name': '丹麦语'},
    {'id': 'fin', 'name': '芬兰语'},
    {'id': 'cs', 'name': '捷克语'},
    {'id': 'rom', 'name': '罗马尼亚语'},
    {'id': 'slo', 'name': '斯洛文尼亚语'},
    {'id': 'swe', 'name': '瑞典语'},
    {'id': 'hu', 'name': '匈牙利语'},
    {'id': 'cht', 'name': '繁体中文'},
    {'id': 'vie', 'name': '越南语'}
    ];
  toLangArr:any=[
    {'id': 'zh', 'name': '中文'},
    {'id': 'en', 'name': '英语'},
    {'id': 'yue', 'name': '粤语'},
    {'id': 'wyw', 'name': '文言文'},
    {'id': 'jp', 'name': '日语'},
    {'id': 'kor', 'name': '韩语'},
    {'id': 'fra', 'name': '法语'},
    {'id': 'spa', 'name': '西班牙语'},
    {'id': 'th', 'name': '泰语'},
    {'id': 'ara', 'name': '阿拉伯语'},
    {'id': 'ru', 'name': '俄语'},
    {'id': 'pt', 'name': '葡萄牙语'},
    {'id': 'de', 'name': '德语'},
    {'id': 'it', 'name': '意大利语'},
    {'id': 'el', 'name': '希腊语'},
    {'id': 'nl', 'name': '荷兰语'},
    {'id': 'pl', 'name': '波兰语'},
    {'id': 'bul', 'name': '保加利亚语'},
    {'id': 'est', 'name': '爱沙尼亚语'},
    {'id': 'dan', 'name': '丹麦语'},
    {'id': 'fin', 'name': '芬兰语'},
    {'id': 'cs', 'name': '捷克语'},
    {'id': 'rom', 'name': '罗马尼亚语'},
    {'id': 'slo', 'name': '斯洛文尼亚语'},
    {'id': 'swe', 'name': '瑞典语'},
    {'id': 'hu', 'name': '匈牙利语'},
    {'id': 'cht', 'name': '繁体中文'},
    {'id': 'vie', 'name': '越南语'}
  ];
  result:string='';
  resultC:string='';
  resultT:string='';
  textBtn:number=2;
  id:number;
  newsTarget:string;
  translateContent:string;
  titleArr:any[]=[];
  allDate:any={};
  constructor(private demoService:DemoService,private textService:TextService,private router:Router) {
    this.fromLanguage = this.fromLangArr[0].name;
    this.toLanguage = this.toLangArr[0].name;
    this.getColor();

  }
  startCrawler(){
    /*let reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
    if(!reg.test(this.address)){
      alert("这网址不是以http://https://开头，或者不是网址！");
    }else{
      alert("success");
    }*/
    //console.log(this.address);
    if(this.crawlerBtn=='爬取完成'||this.crawlerBtn=='爬取中...'){
      return false;
    }
    if(this.address==undefined){
      alert('地址为空！');
      return false;
    }else{
      if(this.keyWord==undefined){
        this.keyWord='';
      }
      this.crawlerBtn='爬取中...';
      this.demoService.getDate(encodeURI(this.address),this.keyWord)
        .subscribe(result=>{
          this.colorIndex=2;
          this.getColor();
          this.crawlerBtn='爬取完成';
          //console.log(this.crawlerBtn);
          if(result.state==0){
            alert("没有内容！");
          }else if(result.state==1){
            this.crawler = result.msg;
            //console.log(this.crawler);
            if(this.crawler.length>0){
              for(let i=0;i<this.crawler.length;i++){
                for(let j=0;j<this.crawler[i].content.length;j++){
                  let obj:any={};
                  obj.title=this.crawler[i].content[j].title;
                  this.titleArr.push(obj);
                }
              }
              //console.log(this.titleArr);
              this.newsDate = this.crawler[0].publish;
              this.newsTitle = this.titleArr[0].title;
              this.newsTarget = this.crawler[0].content[0].url;
              this.getResult(this.newsTarget);
            }else{
              alert("没有内容");
            }
          }
        })
    }
  }
  changeDate(){
    this.newsTitle='';
    this.titleArr=[];
    for(let i=0;i<this.crawler.length;i++){
      if(this.newsDate==this.crawler[i].publish){
        this.titleArr = this.crawler[i].content;
      }
    }
  }
  changeTitle(){
    for(let i=0;i<this.crawler.length;i++){
      for(let j=0;j<this.crawler[i].content.length;j++){
        if(this.newsTitle==this.crawler[i].content[j].title){
          this.newsDate = this.crawler[i].publish;
          this.newsTarget = this.crawler[i].content[j].url;
        }
      }
    }
    this.getResult(this.newsTarget);
    this.colorIndexT=1;
    this.translateBtn = '开始翻译';
  }
  getResult(url){
    if(url==undefined){
      return false;
    }else{
      this.demoService.getResult(url)
        .subscribe(result=>{
          //console.log(result);
          if(result.msg.length>0){
            this.translateContent = result.msg[0].content;
            this.resultC = this.translateContent;
            //console.log(this.resultC);
          }
        })
    }
  }
  textStart(){
    this.textBtn=3;
    let temSpace:any[]=[];
    temSpace = this.resultT.split('&nbsp；');
    let resultT:string='';
    for(let j=0;j<temSpace.length;j++){
      resultT += temSpace[j]+'';
    }
    //console.log(resultT);
    this.textService.setText(encodeURI(resultT))
      .subscribe(result=>{
        this.id = result;
        this.textBtn=4;
        //this.sessionSet();
        //console.log(this.id);
      });
  }
  analysisResult(){
    this.allDate={
      "address":this.address,
      "keyWord":this.keyWord,
      "newsDate":this.crawler,
      "newsTitle":this.titleArr,
      "newsTarget":this.newsTarget,
      "resultC":this.resultC,
      "resultT":this.resultT
    };
    this.router.navigate(['/text_result'],{queryParams: { id: this.id}});
  }
  output(item){
    if(item){
      this.result='';
      let temArr:any[]=[];
      temArr = item.split('<br />');
      for(let i=0;i<temArr.length;i++){
        this.result += temArr[i]+'\n';
      }
      //console.log(this.result);
      let temBr:any[]=[];
      temBr = this.result.split('<br/>');
      for(let i=0;i<temBr.length;i++){
        this.result += temBr[i]+'\n';
      }
      //console.log(this.result);
      let temSpace:any[]=[];
      temSpace = this.result.split('&nbsp;');
      for(let j=0;j<temSpace.length;j++){
        this.result += temSpace[j]+' ';
      }
      return this.result;
    }
  }
  inputChange(){
    this.newsDate='';
    this.newsTitle='';
    this.newsTarget='';
    this.resultC='';
    this.resultT='';
    this.titleArr=[];
    this.colorIndex=1;
    this.getColor();
    this.crawlerBtn='开始爬取';
    this.languageChange();
  }
  languageChange(){
    this.colorIndexT=1;
    this.getColorT();
    this.translateBtn = '开始翻译';
  }
  startTranslate(){
    for(let i =0;i<this.fromLangArr.length;i++){
      if(this.fromLangArr[i].name==this.fromLanguage){
        this.fromId = this.fromLangArr[i].id;
      }
    }
    for(let j =0;j<this.toLangArr.length;j++){
      if(this.toLangArr[j].name==this.toLanguage){
        this.toId = this.toLangArr[j].id;
      }
    }
    if(this.translateBtn=='翻译完成'||this.translateBtn=='翻译中...'){
      return false;
    }
    if(this.translateContent==undefined){
      alert('翻译内容为空！');
      return false;
    }else {
      this.translateBtn = '翻译中...';
      //console.log(this.translateContent);
      if(this.address=='https://www.defensenews.com/air/2017/08/23/northrops-fix-for-f-35-and-f-22-communications-problems-involves-global-hawk-uavs/'){
          this.resultT = "";
      }
      this.demoService.getTranslate(this.translateContent,this.fromId, this.toId)
        .subscribe(result => {
          //console.log(result);
          this.colorIndexT=2;
          this.getColorT();
          this.translateBtn = '翻译完成';
          this.translate = result.msg.trans_result[0].dst;
          //console.log(this.translate);
          this.resultT = this.translate;
        })
    }
  }
  getColor(){
    if(this.colorIndex==1){
      return{
        'background':'#339bd4'
      }
    }else{
      return{
        'background':'#ff7c35'
      }
    }
  }
  getColorT(){
    if(this.colorIndexT==1){
      return{
        'background':'#339bd4'
      }
    }else{
      return{
        'background':'#ff7c35'
      }
    }
  }
}
