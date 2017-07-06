/**
 * 自动摘要
 * Created by Administrator on 2017/7/6 0006.
 */

import {Component} from '@angular/core'
@Component({
  selector: 'ele-auto-summary',
  styleUrls: ['./auto.summary.component.css'],
  templateUrl: './auto.summary.component.html'
})
export class AutoSummaryComponent {
  d_summary: string = '如果我们在$scope.$watch的监听器函数中停止这个监听，即使我们更新了$scope.name，该监听器也不会被触发。正如前面所提到的，AngularJS将会在每一个指令的控制器函数中运行$scope.$apply。如果我们查看$scope.$apply函数的代码，我们会发现它只会在控制器函数已经开始被调用之后才会运行$digest函数 – 这意味着如果我们马上停止监听，$scope.$watch函数甚至都不会被调用！但是它究竟是怎样运行的呢？$digest函数将会在$rootScope中被$scope.$apply所调用。它将会在$rootScope中运行digest循环，然后向下遍历每一个作用域并在每个作用域上运行循环。在简单的情形中，digest循环将会触发所有位于$$watchers变量中的所有watchExp函数，将它们和最新的值进行对比，如果值不相同，就会触发监听器。';
}
