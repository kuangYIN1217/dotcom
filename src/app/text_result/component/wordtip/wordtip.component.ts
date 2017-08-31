/**
 * Tip
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component , Input} from '@angular/core';
@Component({
  selector: 'word-tip',
  styleUrls: ['./wordtip.component.css'],
  templateUrl: './wordtip.component.html'
})

export class WordTipComponent {
  @Input() data: any;

}
