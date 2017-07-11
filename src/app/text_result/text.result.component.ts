/**
 * Created by Administrator on 2017/7/5 0005.
 */
import {Component} from '@angular/core'
declare var $: any;
@Component({
  selector: 'text-result',
  styleUrls: ['./text.result.component.css'],
  templateUrl: './text.result.component.html'
})
export class TextResultComponent {
  s_selected_index: number = 0;

  constructor() {

  }

  ngOnInit() {
    this.setSelectedScrollTop();
    this.windowScroll();
  }

  /* 监听浏览器滚动条位置 */
  windowScroll() {
    let $this = this;
    window.onscroll = function (event: any) {
      $this.setSelectedScrollTop();
    }
  }

  /* 根据浏览器滚动条高度 渲染menu*/
  setSelectedScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    /* 档scrollTop为10的倍数 计算当前位置 */
    let scroll = scrollTop - 490;
    if (scroll <= 0) {
      this.s_selected_index = 0;
    } else {
      this.s_selected_index = Math.floor(scroll / 480) + ((scroll % 480) > 450 ? 1 : 0)
    }
  }

  /* 点击menu触发滚动条 */
  $menu_click(index) {
    var pos = $('.row').eq(index).offset().top - 160;
    $("html,body").animate({scrollTop: pos}, 400);
  }
}
