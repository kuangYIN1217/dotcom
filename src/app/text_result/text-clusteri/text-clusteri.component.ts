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
  @Input() cluster: any;
  tabIndex:number=1;
  cluster1:any[]=[];
  cluster2:any[]=[];
  cluster3:any[]=[];

  ngOnChanges(...args: any[]) {
    this.cluster1 = this.cluster[0];
    this.cluster2 = this.cluster[1];
    this.cluster3 = this.cluster[2];
  }
  text1(){
    this.tabIndex = 1;
  }
  text2(){
    this.tabIndex = 2;
  }
  text3(){
    this.tabIndex = 3;
  }
}
