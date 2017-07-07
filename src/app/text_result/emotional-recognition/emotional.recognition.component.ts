/**
 * 情感识别
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component} from '@angular/core'
@Component({
  selector: 'ele-emotional-recognition',
  styleUrls: ['./emotional.recognition.component.css'],
  templateUrl: './emotional.recognition.component.html'
})
export class EmotionalRecognitionComponent {
  d_value:any = {
    pos: 0.37,
    neg: 0.63
  }
  getStyle () {
    return {
      'flex': '0 0 37%',
      'width': '37%'
    };
  }
  ngOnInit() {

  }
}
