const React = require('react');
const ReactDOM = require('react-dom');

var Entry = React.createClass({
	render() {
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


