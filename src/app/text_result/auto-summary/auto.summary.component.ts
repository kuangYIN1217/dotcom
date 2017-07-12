/**
 * 自动摘要
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component , Input} from '@angular/core'
@Component({
  selector: 'ele-auto-summary',
  styleUrls: ['./auto.summary.component.css'],
  templateUrl: './auto.summary.component.html'
})
export class AutoSummaryComponent {
  @Input() d_summary: string;
}
