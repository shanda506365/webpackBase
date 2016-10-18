const React = require('react');
const ReactDOM = require('react-dom');

const content = require('./content');

var $ = require('jquery');
require('./LoadMask');
require("!style!css!less!../node_modules/bootstrap/less/bootstrap.less");
require("!style!css!less!../less/index.less");
require("!style!css!less!../less/loadmask.less");

require('../node_modules/bootstrap/dist/js/bootstrap.min');

class Point{
	constructor(x,y) {
	   this.x=x;
	   this.y=y;
	}
	toString(){
		return `(${this.x},${this.y})`;
	}
}
class ColorPoint extends Point{
	constructor(x,y,color) {
	  super(x,y);
	  this.color = color;
	}
	toString(){ 
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
		var temp = new ColorPoint(2,3,'red');
		console.log(temp.toString());
		//解构赋值
		var [ab,ac] = [1,2];
		console.log(ab+'-'+ac);
		//map字典
		var map = new Map();
		map.set('11','aa');
		map.set('22','cc');
		for(let[key,value] of map){
			console.log(key+'is'+value);
		}
		//解构函数
		function JsonFun({name,val}){
			 
			console.log(name+':"'+val);
		}
		var Json = {
			name:'name',
			val:'val'
		};
		JsonFun(Json);
		//字符扩展 针对unicode大于0xFFFF字符
		var s = "𠮷";
		console.log(s.codePointAt(0) > 0xFFFF);
		console.log(s.charCodeAt(0));
		console.log(String.fromCodePoint(134071));
		console.log("\u{20BB7}");
		console.log(/^.$/u.test(s));
		function codePointLength(text){
			var re = text.match(/[\s\S]/gu);
			return re?re.length:0;
		}
		console.log(s.length+'--'+codePointLength(s));
	},
	render: function() {
		var me = this;
		return (
			<div className='test'>
				<h1>Hello, world!</h1>
				<input type="button" className='btn btn-success' value='button' onClick={me.btnEnterClick}/>
				<br/>
				<button type="button" className="btn btn-default btn-lg">
				  <span className="glyphicon glyphicon-star"></span> Star
				</button>
				<button id='element' type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
				 
				<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
				  Launch demo modal
				</button>

				 
				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
				        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
				      </div>
				      <div className="modal-body">
				        ...
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary">Save changes</button>
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