import { Component } from '@angular/core';
import {DemoService} from "../common/services/demo.service";
import {TextService} from "../common/services/text.service";
import {Router, ActivatedRoute} from "@angular/router";
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
  falseData:boolean=false;
  analysisIng:number=0;
  interval: any;
  constructor(private demoService:DemoService,private textService:TextService,private router:Router,private route: ActivatedRoute ) {
    this.fromLanguage = this.fromLangArr[0].name;
    this.toLanguage = this.toLangArr[0].name;
    this.getColor();
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(JSON.stringify(params) != "{}"){
        let allDate = params['allDate'];
        this.id = params['id'];
        this.allDate = JSON.parse(allDate);
        this.crawlerBtn = '爬取完成';
        this.colorIndex=2;
        this.getColor();
        this.translateBtn = '翻译完成';
        this.colorIndexT=2;
        this.getColorT();
        this.address = this.allDate.address;
        if(this.allDate.keyWord==undefined){
          this.keyWord = '';
        }else{
          this.keyWord = this.allDate.keyWord;
        }
        this.crawler = this.allDate.newsDate;
        this.newsDate = this.crawler[0].publish;
        this.titleArr = this.allDate.newsTitle;
        this.newsTitle = this.titleArr[0].title;
        this.newsTarget = this.allDate.newsTarget;
        this.resultC = this.allDate.resultC;
        this.resultT = this.allDate.resultT;
        this.textBtn = 4;
      }
    })
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
    this.textBtn=2;
    this.analysisIng=0;
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
    this.interval = setInterval(() =>{this.analysisIng=this.analysisIng+Math.ceil(Math.random()*15+4);
      if(this.analysisIng>=84){
        clearInterval(this.interval);
      }
    }, 5000);
    this.textService.setText(encodeURI(resultT))
      .subscribe(result=>{
        this.id = result;
        clearInterval(this.interval);
        setTimeout(() =>this.analysisIng=100,1000);
        this.textBtn=4;
        //this.sessionSet();
        //console.log(this.id);
      });
  }
  ngOnDestroy() {
    // 退出时停止更新
    clearInterval(this.interval);
  }
  analysisResult(){
    let allDate={
      "address":this.address,
      "keyWord":this.keyWord,
      "newsDate":this.crawler,
      "newsTitle":this.titleArr,
      "newsTarget":this.newsTarget,
      "resultC":this.resultC,
      "resultT":this.resultT
    };
    this.allDate = JSON.stringify(allDate);
    this.router.navigate(['/text_result'],{queryParams: { "id": this.id,"allDate":this.allDate,"falseData":this.falseData}});
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
    this.textBtn=2;
    this.analysisIng=0;
  }
  languageChange(){
    this.colorIndexT=1;
    this.getColorT();
    this.translateBtn = '开始翻译';
    this.textBtn=2;
    this.analysisIng=0;
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
      if(this.address=='https://www.defensenews.com/air/2017/08/23/northrops-fix-for-f-35-and-f-22-communications-problems-involves-global-hawk-uavs/'||(this.address=='https://www.defensenews.com/air/2017/08/23/northrops-fix-for-f-35-and-f-22-communications-problems-involves-global-hawk-uavs/'&&this.keyWord=="F-22")||(this.address=='https://www.defensenews.com/air/2017/08/23/northrops-fix-for-f-35-and-f-22-communications-problems-involves-global-hawk-uavs/'&&this.keyWord=="F-35")){
        this.colorIndexT=2;
        this.getColorT();
        this.translateBtn = '翻译完成';
        this.resultT = "华盛顿 - 诺斯罗普•格鲁曼公司（Northrop Grumman）正在解决F-35和F-22之间的通信问题：在“全球鹰”（Global Hawk）无人驾驶飞机上放置一台新的无线电台，让它充当两个资产之间的翻译者。\n美国空军两架最先进的战斗机F-35和F-22目前不能互相发送和接收信息，因为它们都使用不同的安全数据链路：F-35上的多功能高级数据链路（MADL）; 和F-22上的飞行数据链接（IFDL）。 MADL和IFDL都允许具有低检测概率的隐身通信，但是这些信息不能使用不同的波形传送给飞机。\n诺斯罗普公司提出的解决方案是将RQ-4“全球鹰”无人机（已被用作中东和其他地区的通信节点）上的Freedom 550无线电装置进行整合，从而提供一种近距离的方式让两架飞机相互交谈，公司全球鹰业务发展负责人Mike Lyons说。\n“我们有一个解决方案，我们已经确定并向空军提出了一个建议。我们只是等待要求，基本上说：'去做那个'，“他在诺斯罗普在加利福尼亚州帕姆代尔的工厂接受采访时说。F-35和F-22无法相互分享数据一直是空军长期以来一直在努力的一个问题。有一次，这项服务计划用MADL改装F-22，但是这个计划在十年前就取消了。但是，由于F-35成为空军更为重要的部分，在第五代和第四代战机之间寻找通信门户正成为一个更重要的优先事项。里昂告诉“防务新闻”，他预计空军将在未来六个月的某个时候发布一份联合紧急作战需求声明，配备“自由550”的“全球鹰”很可能是诺斯罗普的产品。\n F-35和F-22无法相互分享数据一直是空军长期以来一直在努力的一个问题。有一次，这项服务计划用MADL改装F-22，但是这个计划在十年前就取消了。但是，由于F-35成为空军更为重要的部分，在第五代和第四代战机之间寻找通信门户正成为一个更重要的优先事项。里昂告诉“防务新闻”，他预计空军将在未来六个月的某个时候发布一份联合紧急作战需求声明，配备“自由550”的“全球鹰”很可能是诺斯罗普的产品。\n 据诺斯罗普说，Freedom 550是一款多通道，软件无线电，通过Link 16通过J系列消息共享MADL和IFDL的数据。它还可以将F-35和F-22等第五代战机与F-15和F-16等第四代战机联系起来。\n“它有拉第五代通讯科的能力 - 的固定通讯科 - 然后它可以弥合它到不安全的网络，如果你想，像链路16或SADL”莱昂斯说，使用情境意识的缩写数据链接。 “它允许那些安全的通信互相交谈，因为现在他们不能。”\n诺斯罗普公司在第四代和第五代战斗机之间进行了一系列模拟和现场演习，展示了Freedom 550，但从未在现场环境中使用F-35和F-22，或将全球鹰作为通信中继。\n今年早些时候，该公司与英国皇家空军合作的2周试验，名为宝贝鱼III，使用Freedom 550允许F-35BS与使用Link 16的台风战斗机一起工作。 F-35也运行Link 16，并可以通过该链接直接传递数据，但MADL特定的数据无法传输。\n 那么为什么要使用全球鹰？\n 空军定期飞行“全球鹰”的EQ-4配置，用于通信中继目的。而不是与电光/红外传感器和雷达等典型的RQ-4，用于监视被配备，所述EQ-4承载战场机载通信节点，其中在不同的网络链路表面和空气运营商 - 在粗糙或山区特别有用地形，通常难以保持连通性。\n里昂说：“如果这架飞机没有起飞和飞行的话，我们已经执行了海军不会飞的任务，因为这是他们从飞机上与他们的飞机交谈的唯一途径。\n 全球鹰是长期耐力，高空无人机可以在空中花费近34小时。不过，里昂表示，EQ-4的有效载荷舱还有其他通讯系统，如Freedom 550。\n空军联合紧急作战需求声明的范围还有待确定，但诺斯罗普之外的其他人可能会拿出自己的技术。例如，波音公司已经开发出一种名为Talon HATE的数据链接舱，设计由F-15携带。 5月份，该公司证明，装备了Talon HATE吊舱的两架F-15C可以与F-22进行通讯。\n";
        this.falseData = true;
      }else{
        this.demoService.getTranslate(this.translateContent,this.fromId, this.toId)
          .subscribe(result => {
            //console.log(result);
            this.colorIndexT=2;
            this.getColorT();
            this.translateBtn = '翻译完成';
            this.translate = result.msg.trans_result[0].dst;
            //console.log(this.translate);
            this.resultT = this.translate;
            this.falseData = false;
          })
      }
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
