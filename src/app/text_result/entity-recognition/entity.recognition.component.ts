/**
 * 实体识别
 * Created by Administrator on 2017/7/6 0006.
 */
import {Component, Input} from '@angular/core'
@Component({
  selector: 'ele-entity-recognition',
  styleUrls: ['./entity.recognition.component.css'],
  templateUrl: './entity.recognition.component.html'
})
export class EntityRecognitionComponent {
  s_selected_all: boolean = true;
  @Input() d_word_list: any;
  @Input() falseData:string;
  ngOnChanges(...args: any[]) {
    if(this.falseData=="true"){
      this.d_word_list=[
        {
          "code":"nr",
          "des":"人名",
          "color":"#cce198",
          "words":[
            "Mike Lyons",
            "里昂"
          ]
        },
        {
          "code":"nt",
          "des":"机构名",
          "color":"#80c269",
          "words":[
            "诺斯罗普•格鲁曼公司（Northrop Grumman）",
            "英国皇家空军",
            "波音公司"
          ]
        },
        {
          "code":"t",
          "des":"时间词",
          "color":"#88abda",
          "words":[
            "目前",
            "未来",
            "现在",
            "今年",
            "六个月",
            "长期",
            "34小时"
          ]
        },
        {
          "code":"ns",
          "des":"地名",
          "color":"#b3d465",
          "words":[
            "华盛顿",
            "诺斯罗普•格鲁曼",
            "美国",
            "中东",
            "诺斯罗普",
            "加利福尼亚州",
            "英国"
          ]
        },
        {
          "code":"nz",
          "des":"其他专名",
          "color":"#84ccc9",
          "words":[
            "诺斯罗普",
            "F-16",
            "F-35",
            "F-22",
            "全球鹰(Global Hawk)",
            "MADL",
            "IFDL",
            "RQ-4“全球鹰”无人机",
            "Freedom 550",
            "Link 16",
            "SADL",
            "宝贝鱼III",
            "F-35BS",
            "EQ-4",
            "电光/红外传感器",
            "雷达",
            "高空无人机",
            "Talon HATE",
            "数据链接舱",
            "F-15",
            "F-15C"
          ]
        }
      ];
      for (let i = 0 ; i < this.d_word_list.length ; i ++) {
        this.d_word_list[i].show = true;
      }
    }else{
      if (this.d_word_list.length) {
        for (let i = 0 ; i < this.d_word_list.length ; i ++) {
          this.d_word_list[i].show = true;
        }
      }
    }
  }
  ngOnInit() {

  }
  $selected_all_change () {
    this.s_selected_all = !this.s_selected_all;
    if (this.s_selected_all) {
      // 全选
      for (let i = 0 ; i < this.d_word_list.length ; i ++) {
        this.d_word_list[i].show = true;
      }
    } else {
      // 全不选 , 选中第一个
      for (let i = 0 ; i < this.d_word_list.length ; i ++) {
        this.d_word_list[i].show = false;
      }
      this.d_word_list[0].show = true;
    }
  }

  $selected_not_all() {
    this.s_selected_all = false;
  }

}
