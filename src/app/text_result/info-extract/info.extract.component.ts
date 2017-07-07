/**
 * 信息提取
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component} from '@angular/core'
declare var $: any;
@Component({
  selector: 'ele-info-extract',
  styleUrls: ['./info.extract.component.css'],
  templateUrl: './info.extract.component.html'
})
export class InfoExtractComponent {
  d_value: any = [
    {
      text: '中国',
      weight: 10
    },{
      text: '国务院',
      weight: 3
    },{
      text: '北京',
      weight: 6
    },{
      text: '习近平',
      weight: 8
    },{
      text: '旅游',
      weight: 5
    },{
      text: '上海',
      weight: 1
    },{
      text: '中国人民代表大会',
      weight: 4
    },{
      text: '共产党',
      weight: 7
    },{
      text: '集中',
      weight: 1
    },{
      text: '江苏',
      weight: 3
    },{
      text: '河北',
      weight: 7
    },{
      text: '共产党',
      weight: 7
    },{
      text: '集中',
      weight: 1
    },{
      text: '江苏',
      weight: 3
    },{
      text: '河北',
      weight: 7
    }
  ];
  ngOnInit () {
    this.initJQcloud();
  }
  initJQcloud () {
    $(".info-extract").jQCloud(this.d_value);
  }
}
