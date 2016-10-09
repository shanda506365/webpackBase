const React = require('react');
const ReactDOM = require('react-dom');
const content = require('./content');

var $ = require('jquery');
require('./LoadMask');
require("!style!css!less!../node_modules/bootstrap/less/bootstrap.less");
require("!style!css!less!../less/index.less");
require("!style!css!less!../less/loadmask.less");

require('../node_modules/bootstrap/dist/js/bootstrap.min');

var Entry = React.createClass({
	btnEnterClick: function() {
		var me = this;

		$('#wrapper').loadingOverlay();
		$('#element').popover('show')
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