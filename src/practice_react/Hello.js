import React, { Component } from 'react';
import './Hello.css';
import 'tachyons';

//写法1
// class Hello extends Component { 
// 	render() {//always have render function
// 		return (  //tc is class name from tachyons, to define the format
// 			//html like file in javascript, JSX
// 			//use className rather than class
// 			//get props from index.js
// 			<div className='f1 tc'>   
// 				<h1>Hello World</h1>
// 				<p>{this.props.greeting}</p>
// 			</div>
// 		);
// 	}
// }

//写法2
const Hello = (props) => {

	return (  //tc is class name from tachyons, to define the format
			//html like file in javascript, JSX
			//use className rather than class
			//get props from index.js
			<div className='f1 tc'>   
				<h1>Hello World</h1>
				<p>{props.greeting}</p>
			</div>
		);
}

export default Hello;     //if we want other file to use it, we need to export it