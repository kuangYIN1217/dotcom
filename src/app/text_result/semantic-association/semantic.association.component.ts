/**
 * 语意联想
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component, Input} from '@angular/core'
declare var echarts: any;
@Component({
  selector: 'ele-semantic-association',
  styleUrls: ['./semantic.association.component.css'],
  templateUrl: './semantic.association.component.html'
})
export class SemanticAssociationComponent {
  @Input() semantic:any;
  ngOnChanges(...args: any[]) {
    this.initEcharts();
  }
  ngOnInit() {

  }
  initEcharts() {
    /* 获取数据 */
    let json = this.semantic;
    //console.log(json);
    if(json.nodes){
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
            data: json.nodes.map(node => {
              if (node.symbolSize === 40) {
                node.itemStyle = {
                  normal: {
                    color: '#71d3cf',
                  }
                }
              } else {
                node.itemStyle = {
                  normal: {
                    color: '#ffb680',
                  }
                }
              }
              return node;
            }),
            edges: json.edges,
            label: {
              normal: {
                show: true,
                position: 'right',
              }
            },
            force: {
              repulsion: 80,
              gravity: 0.1,
              edgeLength: 40,
            },
            roam: 'move',
            draggable: true, // 节点是否可以拖拽
            legendHoverLink: true, // hover时候高亮
            focusNodeAdjacency: true,
          }
        ]
      }, true);
  }
  }
}
