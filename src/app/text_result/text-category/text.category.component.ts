/**
 * 文本分类
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component, Input} from '@angular/core'
declare var echarts: any;
@Component({
  selector: 'ele-text-category',
  styleUrls: ['./text.category.component.css'],
  templateUrl: './text.category.component.html'
})
export class TextCategoryComponent {
  @Input() d_word_list:any;
  @Input() falseData:string;
  ngOnChanges(...args: any[]) {
    //console.log(this.d_value);
    this.initEcharts();
  }
/*  ngOnInit() {
    this.initEcharts();
  }*/
  initEcharts() {
// 获取data数据
    let xAxis_data = [];
    let series_data = [];
    let colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
    let colorList_index = 0;
    if(this.falseData=="true"){
      this.d_word_list=[
        {
          "des":"航空",
          "ratio":0.9294629979133606
        },
        {
          "des":"能源",
          "ratio":0.2629081718623638
        },
        {
          "des":"采掘",
          "ratio":0.16932230442762375
        },
        {
          "des":"艺术",
          "ratio":0.18710385113954544
        },
        {
          "des":"历史",
          "ratio":0.1930453538894653
        },
        {
          "des":"政治",
          "ratio":0.2366763055324554
        },
        {
          "des":"经济",
          "ratio":0.486088427901268
        },
        {
          "des":"文学",
          "ratio":0.20950971871614456
        },
        {
          "des":"农业",
          "ratio":0.2846884429454803
        },
        {
          "des":"电子",
          "ratio":0.23039214313030243
        },
        {
          "des":"教育",
          "ratio":0.28738949447870255
        },
        {
          "des":"体育",
          "ratio":0.1441804558038712
        },
        {
          "des":"通信",
          "ratio":0.8443718180060387
        },
        {
          "des":"军事",
          "ratio":0.95018726751208305
        },
        {
          "des":"环境",
          "ratio":0.2593333876132965
        },
        {
          "des":"法律",
          "ratio":0.20394407212734222
        },
        {
          "des":"交通",
          "ratio":0.02123527392745018
        },
        {
          "des":"医药",
          "ratio":0.20412097722291946
        },
        {
          "des":"哲学",
          "ratio":0.2619313359260559
        },
        {
          "des":"计算机",
          "ratio":0.25299073457717896
        }
      ]
    }else{
      this.d_word_list=[
        {
          "des":"航空",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"能源",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"采掘",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"艺术",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"历史",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"政治",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"经济",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"文学",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"农业",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"电子",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"教育",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"体育",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"通信",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"军事",
          "ratio":Math.random()*(1-0.9)+0.9
        },
        {
          "des":"环境",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"法律",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"交通",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"医药",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"哲学",
          "ratio":Math.random()*(0.2-0.05)+0.05
        },
        {
          "des":"计算机",
          "ratio":Math.random()*(0.2-0.05)+0.05
        }
      ]
    }
    for (let i = 0 ; i < this.d_word_list.length ; i++) {
      xAxis_data.push(this.d_word_list[i].des);
      series_data.push({
        value: this.d_word_list[i].ratio,
        itemStyle: {
          normal: {
            color: colorList[colorList_index]
          }
        }
      })
      colorList_index ++;
      if (colorList_index === colorList.length) {
        colorList_index = 0;
      }
    }
    // 基于准备好的dom，初始化echarts实例
    //console.log(xAxis_data);
    var myChart = echarts.init(document.querySelector('.echarts-text-category'));
    // 绘制图表
    myChart.setOption({
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
    /*  grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },*/
      xAxis : [
        {
          type : 'category',
          data : xAxis_data,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval:0
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          type:'bar',
          barWidth: '60%',
          data:series_data
        }
      ]
    });
  }
}
