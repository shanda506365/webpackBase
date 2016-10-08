const React = require('react');
const ReactDOM = require('react-dom');
const content = require('./content.js');
require("!style!css!less!../less/index.less"); 
var Entry = React.createClass({
	componentDidMount:function(){
		alert(content);
	},
	render: function() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<input type="button" className='button' value='button'/>
			</div>
		);
	}
	 
});
ReactDOM.render(
  <Entry/>,
  document.querySelector('#wrapper')
);


