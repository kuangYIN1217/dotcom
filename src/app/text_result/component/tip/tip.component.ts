/**
 * Tip
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component , Input} from '@angular/core'
@Component({
  selector: 'cpt-tip',
  styleUrls: ['./tip.component.css'],
  templateUrl: './tip.component.html'
})
export class TipComponent {
  @Input() data: any;
}
