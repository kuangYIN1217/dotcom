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
  tempObj:any={};
  ngOnChanges(...args: any[]) {
    console.log(this.cluster);
    if(this.cluster.length>0){
      this.cluster[0].flag = 1;
      this.cluster[0].id = 0;
      this.tempObj = this.cluster[0];
    }
  }
  ngOnInit() {

  }
  text(item,index){
    if(index == this.tempObj.id){

    }else{
      item.flag = 1;
      item.id = index;
      this.tempObj.flag = 2;
      this.tempObj = item;
    }
  }
}
