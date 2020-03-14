import tpl from './index.tpl';//模版模块
import './index.scss';//样式模块

import tools from '../../utils/tools';//导出不用JS

export default () => {//带着上面模块导出模块，是一个构造函数
	return {
		name: 'header',
		tpl (options) {
      return tpl().replace(tools.tplReplace(), (node, key) => {
      	return {
          title: options.title,
          showLeftIcon: !options.showLeftIcon && 'none',
          showRightIcon: !options.showRightIcon && 'none'
      	}[key];
      })
		}
	}
}