const React = require('react');
const ReactDOM = require('react-dom');

const content = require('./content');

var $ = require('jquery');
require('./LoadMask');
require("!style!css!less!../node_modules/bootstrap/less/bootstrap.less");
require("!style!css!less!../less/index.less");
require("!style!css!less!../less/loadmask.less");

require('../node_modules/bootstrap/dist/js/bootstrap.min');

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `(${this.x},${this.y})`;
	}
}
class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color;
	}
	toString() {
		return `${this.color} ${super.toString()}`;
	}
}
var Entry = React.createClass({
	btnEnterClick: function() {
		var me = this;

		$('#wrapper').loadingOverlay();
		$('#element').popover('show')
			//$('.test').loadingOverlay('remove');

	},
	componentDidMount: function() {
		console.log(content);
		var temp = new ColorPoint(2, 3, 'red');
		console.log(temp.toString());
		//解构赋值
		var [ab, ac] = [1, 2];
		console.log(ab + '-' + ac);
		//map字典 IeNo
		var map = new Map();
		map.set('11', 'aa');
		map.set('22', 'cc');
		for (let [key, value] of map) {
			console.log(key + 'is' + value);
		}
		//解构函数
		function JsonFun({
			name,
			val
		}) {

			console.log(name + ':"' + val);
		}
		var Json = {
			name: 'name',
			val: 'val'
		};
		JsonFun(Json);
		//字符扩展 针对unicode大于0xFFFF字符
		var s = "𠮷";
		console.log(s.codePointAt(0) > 0xFFFF);
		console.log(s.charCodeAt(0));
		console.log(String.fromCodePoint(134071));
		console.log("\u{20BB7}");
		console.log(/^.$/u.test(s));

		function codePointLength(text) {
			var re = text.match(/[\s\S]/gu);
			return re ? re.length : 0;
		}
		console.log(s.length + '--' + codePointLength(s));
		var ss = "Hello World!";
		console.log(ss.startsWith("Hello"));
		console.log(ss.endsWith("!"));
		//console.log(ss.contains("o"));
		console.log(ss.repeat(3));
		s = "aaa_aa_a";
		var r1 = /a+/g;
		var r2 = /a+/y; //粘连 每次从剩余的头开始
		console.log(r1.exec(s));
		console.log(r2.exec(s));
		console.log(r1.exec(s));
		console.log(r2.exec(s));
		var name = 'bob',
			time = 'today';
		console.log(`sdfa this is ${name} , ${time},${name+time}`);

		//数值扩展
		console.log(0b111110111); //16进制
		console.log(0o767); //8进制

		console.log('isFinate:' + isFinite(25));
		console.log('number isFinate:' + Number.isFinite(25));
		console.log(isFinite('25'));
		console.log(Number.isFinite('25'));
		console.log('isNaN:' + isNaN("NaN"));
		console.log('number isNaN:' + Number.isNaN("NaN"));
		console.log(isNaN(NaN));
		console.log(Number.isNaN(NaN));

		console.log(Number.parseInt('2233d'));
		console.log(Number.parseFloat('223.3d'));
		console.log(Number.isInteger(25));
		console.log(Number.isInteger(25.1));
		console.log(Number.isInteger(Number.MAX_SAFE_INTEGER));
		console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
		console.log(Number.isInteger(Number.MAX_SAFE_INTEGER + 1));
		console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

		//数组 
		console.log(Array.of(3, 2, 2));

		console.log(Array.of(3, 5, 6, 10, 15).find(function(val, index, arr) {
			return val > 9;
		}));
		console.log(Array.of(3, 5, 6, 10, 15).findIndex((val, index, arr) => {
			return val > 9
		}));

		for (let [index, elem] of['a', 'b'].entries()) {
			console.log(index, elem);
		}
		for (let [key, val] of map.entries()) {
			console.log(key, val);
		}
		//对象扩展
		Json = {
			[s]: '扩展属性名'
		}
		console.log(Json[s], Json['aaa_aa_a']);

		var proxy = new Proxy(Json, {
			get(target, property) {
				if (property in target) {
					return target[property];
				} else {
					return 'no property';
				}
			}
		});
		console.log(proxy.name, proxy[s]);
		// function observer(changes){  //es7属性
		// 	changes.forEach(function(change){
		// 		console.log('发生变动的属性：'+change.name);
		// 		console.log('变动前的值：'+change.oldValue);
		// 		console.log('变动后的值：'+change.object[change.name]);
		// 		console.log('变动类型：'+change.type);
		// 	})
		// }
		// Object.observe(Json,observer);
		// Json.test= 11;
		// Json.test=22;



		//函数的扩展
		class Point {
			constructor(x = this.throwIfMissing(), y = 0) {
				[this.x, this.y] = [x, y];
			}
			throwIfMissing(){
				console.log('Missing paramter');
				//throw new Error('Missing paramter');
			}

		}
		var p = new Point();
		console.log(p.x,p.y);

	},
	render: function() {
		var me = this;
		return (
			<div className='test'>
				<h1>显示一下</h1>
				<input type="button" className='btn btn-success' value='button' onClick={me.btnEnterClick}/>
				<br/>
				<button type="button" className="btn btn-default btn-lg">
				  <span className="glyphicon glyphicon-star"></span> 赞
				</button>
				<button id='element' type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">提示？</button>
				 
				<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
				 打开窗口
				</button>

				 
				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">关闭</span></button>
				        <h4 className="modal-title" id="myModalLabel">标题</h4>
				      </div>
				      <div className="modal-body">
				        ...
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
				        <button type="button" className="btn btn-primary">保存</button>
				      </div>
				    </div>
				  </div>
				</div>

			</div>
		);
	}

});

ReactDOM.render(
	<Entry/>,
	document.querySelector('#wrapper')
);