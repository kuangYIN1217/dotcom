/**
 * 情感识别
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component, Input} from '@angular/core'
@Component({
  selector: 'ele-emotional-recognition',
  styleUrls: ['./emotional.recognition.component.css'],
  templateUrl: './emotional.recognition.component.html'
})
export class EmotionalRecognitionComponent {
  @Input() d_value:any;
  getStyle (value) {
    return {
      'flex': '0 0 value',
      'width': 'value'
    };
  }
  toPercent(point){
  let str=Number(point*100).toFixed(1);
  str+="%";
  return str;
}
  ngOnChanges(...args: any[]) {
    this.getStyle(this.toPercent(this.d_value.pos));
  }
  ngOnInit() {

  }
}
