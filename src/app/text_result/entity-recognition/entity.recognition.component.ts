/**
 * 实体识别
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component} from '@angular/core'
@Component({
  selector: 'ele-entity-recognition',
  styleUrls: ['./entity.recognition.component.css'],
  templateUrl: './entity.recognition.component.html'
})
export class EntityRecognitionComponent {
  s_selected_all: boolean = false;
  d_word_list: any = [
    {
      code: 'a',
      des: '地名',
      color: '#ff9a5c',
      words: ['北京' , '加利福尼亚' ,'日本' ,'南京','上海' , '合肥' ,'旧金山' ,'徐庄软件园' , '加勒比海' , '富士山']
    }, {
      code: 'b',
      des: '人名',
      color: '#b17900',
      words: ['奥巴马','成龙','阮一峰','小明','小王','张三','李四']
    }, {
      code: 'c',
      des: '机构名',
      color: '#4cb9d3',
      words: ['中国作家协会' , '足协' ,'中国共产党' ,'中国人民代表大会']
    }, {
      code: 'd',
      des: '时间',
      color: '#9cdd5d',
      words: ['2017.7.6','去年']
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
      // 全不选 , 选中第一个
      for (let i = 0 ; i < this.d_word_list.length ; i ++) {
        this.d_word_list[i].show = false;
      }
      this.d_word_list[0].show = true;
    }
  }
}
