/**
 * 词性分析
 * Created by Administrator on 2017/7/5 0005.
 */
import {Component, Input, EventEmitter, Output} from '@angular/core'
import {TextService} from "app/common/services/text.service";
@Component({
  selector: 'ele-word-analysis',
  styleUrls: ['./word.analysis.component.css'],
  templateUrl: './word.analysis.component.html',
  providers: [TextService]
})
export class WordAnalysisComponent {
  s_selected_all: boolean = true;
  status:string;
  wordlist:any[]=[];
  content:number=0;
  id:any;
  @Input() d_word_list: any ;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  constructor(private textService: TextService) {
    this.id = window.sessionStorage.getItem("id");
      this.textService.getWord()
        .subscribe(result=>{
          this.wordlist = result;
          console.log(result);
        })
  }
  ngOnChanges(...args: any[]) {
    if (this.d_word_list.length) {
      for (let i = 0 ; i < this.d_word_list.length ; i ++) {
        this.d_word_list[i].show = true;
      }
    }
  }
  ngOnInit() {

  }

  toggle(item){
    if(item=='thulac'){
      this.content = 1;
      this.getData(this.id,'thulac');
      //this.dataChange.emit('thulac');
    }else if(item=='ltp'){
      this.content = 0;
      this.getData(this.id,'ltp');
     // this.dataChange.emit('ltp');
    }
  }
  getData(id,target){
    this.textService.getAllData(id,target)
      .subscribe(result=>{
        //console.log(result.taggingAnalyses);
        this.d_word_list = result.taggingAnalyses;
      });
  }
  $selected_all_change () {
    this.s_selected_all = !this.s_selected_all;
    if (this.s_selected_all) {
      // 全选
      for (let i = 0 ; i < this.d_word_list.length ; i ++) {
        this.d_word_list[i].show = true;
      }
    } else {
      // 全不选
      for (let i = 0 ; i < this.d_word_list.length ; i ++) {
        this.d_word_list[i].show = false;
      }
      this.d_word_list[0].show = true;
    }
  }

  $selected_not_all() {
    this.s_selected_all = false;
  }
}
