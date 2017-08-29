/**
 * 文本聚类
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component , Input} from '@angular/core'
@Component({
  selector: 'ele-text-clusteri',
  styleUrls: ['./text-clusteri.component.css'],
  templateUrl: './text-clusteri.component.html'
})
export class TextClusteriComponent {
  @Input() d_summary: string;
  ngOnChanges(...args: any[]) {
  }
}
