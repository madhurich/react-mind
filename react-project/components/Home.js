import React from 'react';

export class Home extends React.Component{
	constructor(props){
		super();
		this.state = {
			color: props.inHome.color,
			initialHomeLink: props.initialHome
		};
		/*setTimeout(function(){alert("checking");}, 300);*/
	}
	
	changeColor(){
		this.setState({
			color: "green"
		});
	}
	changeHomeHere(){
		this.props.changeHome(this.state.initialHomeLink);
	}
	onInputChange(event){

		this.setState({
			initialHomeLink: event.target.value
		});
	}
	componentWillMount(){
		console.log("component will mount");
	}
	componentDidMount(){
		console.log("component did mount");
	}
	componentWillReceiveProps(nextProps){
		console.log("component will receive props", nextProps);
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log("should component update", nextProps, nextState);
		return true;
	}
	componentWillUpdate(nextProps, nextState){
		console.log("component will update", nextProps, nextState);
	}
	componentDidUpdate(prevProps, prevState){
		console.log("component did update", prevProps, prevState);
	}
	componentWillUnmount(){
		console.log("component will unmount");
	}
	render(){
		var span = <span><strong>Madhuri</strong></span>
		return (
				<div>
					<p>Home content here</p>
					{span}
					<div>
						<h4>Address of home</h4>
						<p>Location: {this.props.place}</p>
						<p>Block: {this.props.block}</p>
						<h4>Inside of home</h4>
						<ul>people: {this.props.inHome.people.map((person, index)=>
						<li key={index}>{person}</li>)}</ul>
						<p onMouseOver={this.changeColor.bind(this)}>Home-color: {this.state.color}</p>
						<p>Direction: {this.props.inHome.direction}</p>
						<button onClick={this.props.greeting}>Greet</button>{/*this executes 
						function inparent*/}
						<input type="text" value={this.state.initialHomeLink}
						onChange={this.onInputChange.bind(this)}/>{/*this observes changes and
						that value is displayed instead of home TWO WAY BINDING*/}
						<button onClick={this.changeHomeHere.bind(this)}>Change</button>
					</div>
				{this.props.children} {/*children is a reserved keyword,
				this is used to display the child element h5 written inside of Home element
				in the file main.js */}
				</div>

			);
	}

}
{/*Decalring propTypes for each property defined for the Home component*/}
Home.propTypes = {
	place: React.PropTypes.string,
	block: React.PropTypes.number,
	inHome: React.PropTypes.object,
	children: React.PropTypes.element.isRequired
		
	}
