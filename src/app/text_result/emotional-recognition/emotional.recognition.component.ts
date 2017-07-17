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
  percent:string;
  @Input() d_value:any;

  getStyle () {
    return {
      'flex': '0 0 '+this.percent,
      'width':this.percent
    };
  }
  toPercent(point){
    if(point==0||point==1){
      return point;
    }else{
      let str=point*100+"%";
      return str;
    }

  }
  ngOnChanges(...args: any[]) {
    if(this.d_value.pos){
      this.percent = this.toPercent(this.d_value.pos);
    }
  }
  ngOnInit() {

  }
}
