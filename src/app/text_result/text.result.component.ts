/**
 * Created by Administrator on 2017/7/5 0005.
 */
import {Component} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {TextService} from "../common/services/text.service";
declare var $: any;
@Component({
  selector: 'text-result',
  styleUrls: ['./text.result.component.css'],
  templateUrl: './text.result.component.html',
  providers: [TextService]
})
export class TextResultComponent {
  s_selected_index: number = 0;
  id:number;
  wordAnalysis:any[]=[];
  wordRatio:any[]=[];
  entityRec:any[]=[];
  infoExtract:any[]=[];
  textCategory:any[]=[];
  d_summary:string;
  emotionalRec:any={};
  semanticAss:any={};
  constructor(private route: ActivatedRoute ,private router: Router,private textService: TextService) {

  }

  ngOnInit() {
    this.setSelectedScrollTop();
    this.windowScroll();
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      //console.log(this.id);
      this.textService.getAllData(this.id)
        .subscribe(result=>{
            this.wordAnalysis=result.taggingAnalyses;
            this.wordRatio = result.taggingComponentRatio;
            this.entityRec = result.entityRecognitions;
            this.d_summary = result.summaries[0].text;
            this.textCategory = this.getTextCategory(result.classifications);
            this.infoExtract = this.getInfoExtract(result.keywords);
            this.emotionalRec = this.getEmotionalRec(result.sentiments);
            this.semanticAss = this.getSemanticAss(result.semanticAssociation);
        })
    })
  }
  getSemanticAss(array){
    let nodes = array[0].nodes;
    let edges = array[1].edges;
    let tempa:any={};
     tempa.nodes = nodes;
     tempa.edges = edges;
    return tempa;
  }
  getEmotionalRec(array){
      let neg = array[0].neg;
      let pos = array[1].pos;
      let tem:any={};
      tem.neg = neg.toFixed(2);
      tem.pos = pos.toFixed(2);
    return tem;
  }
  getTextCategory(array){
    for(let i in array){
      let weight = (array[i].ratio*10).toFixed(3);
      array[i].weight = weight;
    }
    return array;
  }
  getInfoExtract(array){
    for(let i in array){
      let weight = Math.floor(array[i].weight*100);
      array[i].weight = weight;
    }
    return array;
  }
  /* 监听浏览器滚动条位置 */
  windowScroll() {
    let $this = this;
    window.onscroll = function (event: any) {
      $this.setSelectedScrollTop();
    }
  }

  /* 根据浏览器滚动条高度 渲染menu*/
  setSelectedScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    /* 档scrollTop为10的倍数 计算当前位置 */
    let scroll = scrollTop - 490;
    if (scroll <= 0) {
      this.s_selected_index = 0;
    } else {
      this.s_selected_index = Math.floor(scroll / 480) + ((scroll % 480) > 450 ? 1 : 0)
    }
  }

  /* 点击menu触发滚动条 */
  $menu_click(index) {
    var pos = $('.row').eq(index).offset().top - 160;
    $("html,body").animate({scrollTop: pos}, 400);
  }
}
