/**
 * Created by Administrator on 2017/7/6 0006.
 */
/**
 * 词性比例构成
 * Created by Administrator on 2017/7/5 0005.
 */
import {Component} from '@angular/core'
@Component({
  selector: 'ele-word-ratio',
  styleUrls: ['./word.ratio.component.css'],
  templateUrl: './word.ratio.component.html'
})
export class WordRatioComponent {
  d_word_list: any = [
    {
      code: 'a',
      des: '名词',
      color: '#ff9a5c',
      ratio: 50
    }, {
      code: 'b',
      des: '动词',
      color: '#b17900',
      ratio: 10
    }, {
      code: 'c',
      des: '形容词',
      color: '#4cb9d3',
      ratio: 10
    }, {
      code: 'd',
      des: '标点',
      color: '#9cdd5d',
      ratio: 10
    }, {
      code: 'e',
      des: '地名',
      color: '#ff4b33',
      ratio: 10
    }
    , {
      code: 'e',
      des: '机构团体',
      color: '#80c269',
      ratio: 2
    }, {
      code: 'f',
      des: '其他',
      color: '#67d4b2',
      ratio: 8
    }
  ];
}
