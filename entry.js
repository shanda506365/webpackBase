const React = require('react');
const ReactDOM = require('react-dom');
const content = require('./content.js');
var Entry = React.createClass({
	componentDidMount:function(){
		alert(content);
	},
	render: function() {
		return (
			<div>
				<h1>Hello, world!</h1>
			</div>
		);
	}
	 
});
ReactDOM.render(
  <Entry/>,
  document.querySelector('#wrapper')
);


