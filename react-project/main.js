import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';


class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			initialHomeLink: "Home",
			isClicked: true
		};
	}
	changeHomeLink(newLinkHere){
		this.setState({
			initialHomeLink: newLinkHere
		});
	}
	greet(){
		alert("hello");
	}
	addRemove(){
		this.setState({
			isClicked: !this.state.isClicked
		});
	}
	render(){
		var inHome = {
			people : ["mom", "dad", "me"],
			color: "greyish blue",
			direction: "NE"
		}, append = "";
		if(this.state.isClicked){
			append = (
					<Home place={"india"} 
				block={40} inHome={inHome} 
				greeting={this.greet} 
				changeHome={this.changeHomeLink.bind(this)}
				initialHome={this.state.initialHomeLink}>
					<h3>element required in home</h3>
				</Home>
				);
		}
		return (
			<div> 
				<Header homeLink={this.state.initialHomeLink}></Header>
				{append}
				<button onClick={this.addRemove.bind(this)}>Remove/Add</button>

			</div>
		)		
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));