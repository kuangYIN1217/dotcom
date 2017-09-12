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
  @Input() d_summary: any={};
  content:number=1;
/*  ngOnChanges(...args: any[]) {
    console.log(this.d_summary);
  }*/
  toggle(item){
    if(item=='extract'){
      this.content = 1;
    }else if(item=='abstract'){
      this.content = 0;
    }
  }
}
