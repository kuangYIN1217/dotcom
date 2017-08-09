/**
 * 多选择框
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component, Input, Output , EventEmitter} from '@angular/core'
@Component({
  selector: 'cpt-checkbox',
  styleUrls: ['./checkbox.component.css'],
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  @Input() data: any;
  @Input() checkbox: boolean = true;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  @Output() selectNotAll: EventEmitter<any> = new EventEmitter();
  $checkbox_change (index) {
    this.data[index].show = !this.data[index].show;
    this.dataChange.emit(this.data)
    if (!this.data[index].show) {
      this.selectNotAll.emit();
    }
  }
}
