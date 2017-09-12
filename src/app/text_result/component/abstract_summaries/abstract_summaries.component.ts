
/**
 * 多选择框
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component, Input, Output , EventEmitter} from '@angular/core'
@Component({
  selector: 'cpt-abstract',
  styleUrls: ['./abstract_summaries.component.css'],
  templateUrl: './abstract_summaries.component.html'
})
export class AbstractSummariesComponent {
  @Input() datalist: any={};

}
