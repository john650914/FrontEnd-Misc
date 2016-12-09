import React from 'react';
import ReactDOM from 'react-dom';

class Apple extends React.Component{
	render(){
		return <h1>This is an apple！！！</h1>;
	}
}

ReactDOM.render(<Apple />,document.getElementById('fruit'));