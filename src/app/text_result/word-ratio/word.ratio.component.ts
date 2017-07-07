/**
 * Created by Administrator on 2017/7/6 0006.
 */
/**
 * 词性比例构成
 * Created by Administrator on 2017/7/5 0005.
 */
import {Component} from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'ele-word-ratio',
  styleUrls: ['./word.ratio.component.css'],
  templateUrl: './word.ratio.component.html'
})
export class WordRatioComponent {
  d_word_list: any = [
    {
      code: 'a',
      des: '名词',
      color: '#ff9a5c',
      ratio: 0.3
    }, {
      code: 'b',
      des: '动词',
      color: '#b17900',
      ratio: 0.15
    }, {
      code: 'c',
      des: '形容词',
      color: '#4cb9d3',
      ratio: 0.25
    }, {
      code: 'd',
      des: '标点',
      color: '#9cdd5d',
      ratio: 0.10
    }, {
      code: 'e',
      des: '地名',
      color: '#ff4b33',
      ratio: 0.10
    }
    , {
      code: 'e',
      des: '机构团体',
      color: '#80c269',
      ratio: 0.02
    }, {
      code: 'f',
      des: '其他',
      color: '#67d4b2',
      ratio: 0.08
    }
  ];

  ngOnInit() {
    this.initEcharts();
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
        formatter: "{a} <br/>{b} : {d}%"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: legend_data
      },
      series : [
        {
          name: '词性比例',
          type: 'pie',
          radius : '55%',
          center: ['50%', '55%'],
          data: series_data
        }
      ]
    });
  }
}
