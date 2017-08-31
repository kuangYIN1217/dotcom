/**
 * Tip
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component , Input} from '@angular/core';
declare var $:any;
@Component({
  selector: 'ltp-tip',
  styleUrls: ['./ltp.component.css'],
  templateUrl: './ltp.component.html'
})

export class LtpTipComponent {
  @Input() data: any;

}
