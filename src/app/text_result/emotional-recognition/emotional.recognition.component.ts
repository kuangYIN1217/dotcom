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
      'flex': '0 0 '+value,
      'width': value
    };
  }
  toPercent(point){
    if(point==0||point==1){
      console.log(point);
      return point;
    }else{
      let str=point*100;
      return str;
    }

}
  ngOnChanges(...args: any[]) {
    console.log(this.d_value.pos);
    if(this.d_value.pos){
      this.getStyle(this.toPercent(this.d_value.pos));
    }else{
      console.log(123);
    }

  }
  ngOnInit() {

  }
}
