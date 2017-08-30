/**
 * 多选择框
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component, Input, Output , EventEmitter} from '@angular/core'
@Component({
  selector: 'cpt-wordbox',
  styleUrls: ['./wordbox.component.css'],
  templateUrl: './wordbox.component.html'
})
export class WordboxComponent {
  @Input() data: any;
  @Input() checkbox: boolean = true;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  @Output() selectNotAll: EventEmitter<any> = new EventEmitter();
  tem:string;
  temArr:any[]=[];

  ngOnChanges(...args: any[]) {
    console.log(this.data);
/*    if(this.data.length>0){
    this.tem = this.data[0].code;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].code != this.tem){
        this.temArr.push(this.data[i]);
      }
    }
    console.log(this.temArr);
    }*/
  }

/*  $checkbox_change (index) {
    this.data[index].show = !this.data[index].show;
    this.dataChange.emit(this.data)
    if (!this.data[index].show) {
      this.selectNotAll.emit();
    }
  }*/
}
