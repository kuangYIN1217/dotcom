/**
 * title-des
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component , Input} from '@angular/core'
@Component({
  selector: 'cpt-title-des',
  styleUrls: ['./title.des.component.css'],
  templateUrl: './title.des.component.html'
})
export class TitleDesComponent {
  @Input() title: string = '';
  @Input() des: string = '';
  @Input() ul: string = '';
  lis: Array<string>;
  constructor() {

  }
  ngOnInit() {
    this.lis = this.ul.split(',');
  }
}
