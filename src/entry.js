const React = require('react');
const ReactDOM = require('react-dom');
const content = require('./content');

var $ = require('jquery');
require('./LoadMask'); 
require("!style!css!less!../node_modules/bootstrap/less/bootstrap.less");
require("!style!css!less!../less/index.less");
require("!style!css!less!../less/loadmask.less");
var Entry = React.createClass({
	btnEnterClick: function() {
		var me = this;

		$('#wrapper').loadingOverlay();

		//$('.test').loadingOverlay('remove');

	},
	componentDidMount: function() {
		alert(content);
	},
	render: function() {
		var me = this;
		return (
			<div className='test'>
				<h1>Hello, world!</h1>
				<input type="button" className='btn btn-success' value='button' onClick={me.btnEnterClick}/>
			</div>
		);
	}

});

ReactDOM.render(
	<Entry/>,
	document.querySelector('#wrapper')
);