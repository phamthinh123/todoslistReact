import React,{ Component } from 'react';
import Tick from "../img/tick.svg"
import Circle from "../img/circle.svg"
import "./Todos.css"
class Todos extends Component{
	render(){
		const { item, onClick }=this.props;
		let url=Circle;
		if(item.isComplete){
			url=Tick;
		}
		return(
<div className="Todos">
<img src={url} onClick={onClick} width="30" height="30"/>
<p>{item.title}</p>
</div>
			)
	}
}
export default Todos