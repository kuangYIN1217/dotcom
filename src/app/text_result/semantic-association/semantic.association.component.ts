/**
 * 语意联想
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component} from '@angular/core'
declare var echarts: any;
@Component({
  selector: 'ele-semantic-association',
  styleUrls: ['./semantic.association.component.css'],
  templateUrl: './semantic.association.component.html'
})
export class SemanticAssociationComponent {
  ngOnInit() {
    this.initEcharts();
  }
  initEcharts() {
    /* 获取数据 */
    let json = {
      nodes: [{
        x: null,
        y: null,
        id: '0',
        name: '中国',
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: '#71d3cf'
          }
        }
      }, {
        id: '1',
        x: null,
        y: null,
        name: '江苏',
        symbolSize: 5,
        itemStyle: {
          normal: {
            color: '#ffb680'
          }
        }
      }, {
        id: '2',
        name: '北京',
        x: null,
        y: null,
        symbolSize: 5,
        itemStyle: {
          normal: {
            color: '#ffb680'
          }
        }
      },{
        id: '3',
        name: '中国',
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: '#71d3cf'
          }
        }
      }, {
        id: '4',
        name: '江苏',
        symbolSize: 5,
        itemStyle: {
          normal: {
            color: '#ffb680'
          }
        }
      }, {
        id: '5',
        name: '北京',
        symbolSize: 5,
        itemStyle: {
          normal: {
            color: '#ffb680'
          }
        }
      }],
      edges: [{
        source: '1',
        target: '0'
      }, {
        source: '2',
        target: '0'
      }, {
        source: '5',
        target: '3'
      }, {
        source: '4',
        target: '3'
      }]
    }
    var myChart = echarts.init(document.querySelector('.echarts-semantic-association'));
    myChart.showLoading();
      myChart.hideLoading();
      myChart.setOption({
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
          {
            type: 'graph',
            layout: 'force',
            // progressiveThreshold: 700,
            data: json.nodes,
            edges: json.edges,
            label: {
              normal: {
                show: true,
                position: 'right'
              }
            },
            roam: false,
            draggable: false, // 节点是否可以拖拽
            repulsion: 500,
            legendHoverLink: true, // hover时候高亮
            focusNodeAdjacency: true,
          }
        ]
      }, true);
  }
}
