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
    let json: any = {'edges': [{'source': 32, 'target': 33},
      {'source': 49, 'target': 33},
      {'source': 36, 'target': 33},
      {'source': 11, 'target': 33},
      {'source': 14, 'target': 33},
      {'source': 53, 'target': 51},
      {'source': 38, 'target': 51},
      {'source': 24, 'target': 51},
      {'source': 56, 'target': 51},
      {'source': 30, 'target': 51},
      {'source': 20, 'target': 28},
      {'source': 57, 'target': 28},
      {'source': 22, 'target': 28},
      {'source': 50, 'target': 28},
      {'source': 48, 'target': 28},
      {'source': 34, 'target': 46},
      {'source': 44, 'target': 46},
      {'source': 19, 'target': 46},
      {'source': 0, 'target': 46},
      {'source': 47, 'target': 46},
      {'source': 16, 'target': 54},
      {'source': 35, 'target': 54},
      {'source': 4, 'target': 54},
      {'source': 2, 'target': 54},
      {'source': 25, 'target': 54},
      {'source': 23, 'target': 21},
      {'source': 15, 'target': 21},
      {'source': 26, 'target': 21},
      {'source': 10, 'target': 21},
      {'source': 7, 'target': 21},
      {'source': 52, 'target': 18},
      {'source': 55, 'target': 18},
      {'source': 45, 'target': 18},
      {'source': 42, 'target': 18},
      {'source': 13, 'target': 18},
      {'source': 41, 'target': 5},
      {'source': 1, 'target': 5},
      {'source': 47, 'target': 5},
      {'source': 58, 'target': 5},
      {'source': 8, 'target': 5},
      {'source': 40, 'target': 3},
      {'source': 37, 'target': 3},
      {'source': 17, 'target': 3},
      {'source': 9, 'target': 3},
      {'source': 6, 'target': 3},
      {'source': 27, 'target': 29},
      {'source': 12, 'target': 29},
      {'source': 39, 'target': 29},
      {'source': 31, 'target': 29},
      {'source': 43, 'target': 29}],
      'nodes': [{'id': 0, 'name': '双边', 'symbolSize': 15},
        {'id': 1, 'name': '利益', 'symbolSize': 15},
        {'id': 2, 'name': '行业', 'symbolSize': 15},
        {'id': 3, 'name': '造福', 'symbolSize': 40},
        {'id': 4, 'name': '层面', 'symbolSize': 15},
        {'id': 5, 'name': '共同利益', 'symbolSize': 40},
        {'id': 6, 'name': '希冀', 'symbolSize': 15},
        {'id': 7, 'name': '践行', 'symbolSize': 15},
        {'id': 8, 'name': '互惠', 'symbolSize': 15},
        {'id': 9, 'name': '身体力行', 'symbolSize': 15},
        {'id': 10, 'name': '期许', 'symbolSize': 15},
        {'id': 11, 'name': '韩中', 'symbolSize': 15},
        {'id': 12, 'name': '关联', 'symbolSize': 15},
        {'id': 13, 'name': '友谊', 'symbolSize': 15},
        {'id': 14, 'name': '中苏', 'symbolSize': 15},
        {'id': 15, 'name': '秉承', 'symbolSize': 15},
        {'id': 16, 'name': '各个领域', 'symbolSize': 15},
        {'id': 17, 'name': '行善', 'symbolSize': 15},
        {'id': 18, 'name': '两国人民', 'symbolSize': 40},
        {'id': 19, 'name': '友好合作', 'symbolSize': 15},
        {'id': 20, 'name': '两方', 'symbolSize': 15},
        {'id': 21, 'name': '秉持', 'symbolSize': 40},
        {'id': 22, 'name': '两国', 'symbolSize': 15},
        {'id': 23, 'name': '本著', 'symbolSize': 15},
        {'id': 24, 'name': '共同', 'symbolSize': 15},
        {'id': 25, 'name': '范畴', 'symbolSize': 15},
        {'id': 26, 'name': '恪守', 'symbolSize': 15},
        {'id': 27, 'name': '亲密关系', 'symbolSize': 15},
        {'id': 28, 'name': '双方', 'symbolSize': 40},
        {'id': 29, 'name': '关系', 'symbolSize': 40},
        {'id': 30, 'name': '洽谈', 'symbolSize': 15},
        {'id': 31, 'name': '联系', 'symbolSize': 15},
        {'id': 32, 'name': '中法', 'symbolSize': 15},
        {'id': 33, 'name': '中德', 'symbolSize': 40},
        {'id': 34, 'name': '伙伴关系', 'symbolSize': 15},
        {'id': 35, 'name': '应用领域', 'symbolSize': 15},
        {'id': 36, 'name': '中美', 'symbolSize': 15},
        {'id': 37, 'name': '保佑', 'symbolSize': 15},
        {'id': 38, 'name': '合作伙伴', 'symbolSize': 15},
        {'id': 39, 'name': '矛盾', 'symbolSize': 15},
        {'id': 40, 'name': '安居乐业', 'symbolSize': 15},
        {'id': 41, 'name': '公共利益', 'symbolSize': 15},
        {'id': 42, 'name': '互利', 'symbolSize': 15},
        {'id': 43, 'name': '隔阂', 'symbolSize': 15},
        {'id': 44, 'name': '睦邻友好', 'symbolSize': 15},
        {'id': 45, 'name': '和平共处', 'symbolSize': 15},
        {'id': 46, 'name': '战略伙伴', 'symbolSize': 40},
        {'id': 47, 'name': '互信', 'symbolSize': 15},
        {'id': 48, 'name': '谈判桌上', 'symbolSize': 15},
        {'id': 49, 'name': '中瑞', 'symbolSize': 15},
        {'id': 50, 'name': '两军', 'symbolSize': 15},
        {'id': 51, 'name': '合作', 'symbolSize': 40},
        {'id': 52, 'name': '相互了解', 'symbolSize': 15},
        {'id': 53, 'name': '密切合作', 'symbolSize': 15},
        {'id': 54, 'name': '领域', 'symbolSize': 40},
        {'id': 55, 'name': '两国间', 'symbolSize': 15},
        {'id': 56, 'name': '学术交流', 'symbolSize': 15},
        {'id': 57, 'name': '各方', 'symbolSize': 15},
        {'id': 58, 'name': '国家主权', 'symbolSize': 15}]}
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
                    color: '#71d3cf'
                  }
                }
              } else {
                node.itemStyle = {
                  normal: {
                    color: '#ffb680'
                  }
                }
              }
              return node;
            }),
            edges: json.edges,
            label: {
              normal: {
                show: true,
                position: 'right'
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
