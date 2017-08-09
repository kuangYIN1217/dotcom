/**
 * 实体识别
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component, Input} from '@angular/core'
@Component({
  selector: 'ele-entity-recognition',
  styleUrls: ['./entity.recognition.component.css'],
  templateUrl: './entity.recognition.component.html'
})
export class EntityRecognitionComponent {
  s_selected_all: boolean = true;
  @Input() d_word_list: any;
  ngOnChanges(...args: any[]) {
    //console.log(this.d_word_list);
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
      // 全不选 , 选中第一个
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
