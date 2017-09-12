
/**
 * 多选择框
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component, Input, Output , EventEmitter} from '@angular/core'
@Component({
  selector: 'cpt-extract',
  styleUrls: ['./extract_summaries.component.css'],
  templateUrl: './extract_summaries.component.html'
})
export class ExtractSummariesComponent {
  textIndex:number=1;
  @Input() datalist: any={};
  ngOnChanges(...args: any[]) {
    console.log(this.datalist);
  }

  summary10(){
    this.textIndex = 1;
  }
  summary30(){
    this.textIndex = 2;
  }
  summary50(){
    this.textIndex = 3;
  }
}
