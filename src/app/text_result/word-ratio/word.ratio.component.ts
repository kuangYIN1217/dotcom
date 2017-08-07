/**
 * Created by Administrator on 2017/7/6 0006.
 */
/**
 * 词性比例构成
 * Created by Administrator on 2017/7/5 0005.
 */
import {Component,Input} from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'ele-word-ratio',
  styleUrls: ['./word.ratio.component.css'],
  templateUrl: './word.ratio.component.html'
})
export class WordRatioComponent {
  @Input() d_word_list: any;
  ngOnChanges(...args: any[]) {
    //console.log(this.d_word_list);
    this.initEcharts();
  }
  ngOnInit() {

  }
  initEcharts() {
    // 获取data数据
    let legend_data = [];
    let series_data = [];
    for (let i = 0 ; i < this.d_word_list.length ; i++) {
      legend_data.push(this.d_word_list[i].des);
      series_data.push({
        value: this.d_word_list[i].ratio,
        name: this.d_word_list[i].des,
        itemStyle: {
        normal: {
          color: this.d_word_list[i].color
        }
      }})
    }
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.echarts-word-ratio'));
    // 绘制图表
    myChart.setOption( {
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b}：{d}%"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        //data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        data: legend_data
      },
      series : [
        {
          name: '词性比例',
          type: 'pie',
          radius: ['50%', '70%'],
          data: series_data
        }
      ]
    });
  }
}
