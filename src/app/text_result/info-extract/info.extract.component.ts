/**
 * 信息提取
 * Created by Administrator on 2017/7/6 0006.
 */
import {Component, Input} from '@angular/core'
declare var $: any;
@Component({
  selector: 'ele-info-extract',
  styleUrls: ['./info.extract.component.css'],
  templateUrl: './info.extract.component.html'
})
export class InfoExtractComponent {
  @Input() d_value: any;
  ngOnChanges(...args: any[]) {
    //console.log(this.d_value);
    this.initJQcloud();
  }
  initJQcloud () {
    $(".info-extract").jQCloud(this.d_value);
  }
}
