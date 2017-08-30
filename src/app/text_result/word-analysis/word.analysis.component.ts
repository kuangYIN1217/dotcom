/**
 * 词性分析
 * Created by Administrator on 2017/7/5 0005.
 */
import {Component, Input} from '@angular/core'
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
  @Input() d_word_list: any ;
  constructor(private textService: TextService) {
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
