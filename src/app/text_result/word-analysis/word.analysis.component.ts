/**
 * 词性分析
 * Created by Administrator on 2017/7/5 0005.
 */
import {Component} from '@angular/core'
@Component({
  selector: 'ele-word-analysis',
  styleUrls: ['./word.analysis.component.css'],
  templateUrl: './word.analysis.component.html'
})
export class WordAnalysisComponent {
  s_selected_all: boolean = false;
  d_word_list: any = [
    {
      code: 'a',
      des: '名词',
      color: '#ff9a5c',
      words: ['地区','北京','首都','委员会', '工作','地区','北京人民大会堂','首都','委员会', '工作','地区','北京','首都','委员会', '工作','地区','北京','首都','委员会', '工作']
    }, {
      code: 'b',
      des: '动词',
      color: '#b17900',
      words: ['一起打架','吃饭','好好学习','上网','一起打架','吃饭','好好学习','上网']
    }, {
      code: 'c',
      des: '形容词',
      color: '#4cb9d3',
      words: ['漂亮','美丽','伟大','壮观','漂亮','美丽','伟大','壮观','漂亮','美丽','伟大','壮观']
    }, {
      code: 'd',
      des: '标点',
      color: '#9cdd5d',
      words: ['，' , '。' ,'{' , '——','，' , '。' ,'{' , '——','，' , '。' ,'{' , '——']
    }, {
      code: 'e',
      des: '地名',
      color: '#ff4b33',
      words: ['北京' , '加利福尼亚' ,'日本' ,'南京','上海' , '合肥' ,'旧金山' ,'徐庄软件园' , '加勒比海' , '富士山']
    }
    , {
      code: 'e',
      des: '机构团体',
      color: '#80c269',
      words: ['中国作家协会' , '足协' ,'中国共产党' ,'中国人民代表大会']
    }, {
      code: 'f',
      des: '其他',
      color: '#67d4b2',
      words: ['其他1','其他2']
    }
  ];
  ngOnInit() {
    if (this.d_word_list.length) {
      for (let i = 0 ; i < this.d_word_list.length ; i ++) {
        this.d_word_list[i].show = true;
      }
    }
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

}
