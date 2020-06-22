import React,{ Component } from 'react';
import Down from "./img/down-arrow.svg"
import './App.css';
import Todos from "./components/Todos";

class App extends Component {
  constructor(){
    super();
    this.state={
      todos:[
    {title:"đi ỉa",isComplete:false},
     {title:"đi ngủ",isComplete:true},
      {title:"đi ăn",isComplete:false}
    ],
    filter:"all",
    value:""
  }
    this.CheckAll=this.CheckAll.bind(this);
     this.All=this.All.bind(this);
      this.Active=this.Active.bind(this);
       this.Completed=this.Completed.bind(this);
       this.onKeyUp=this.onKeyUp.bind(this);
       this.onChange=this.onChange.bind(this);
     

  }
  CheckOne(item){

      return (event) => {
        const isComplete=item.isComplete;
        const { todos }=this.state;
        const index=todos.indexOf(item);
        this.setState({
          // todos:[
          // ...todos.slice(0,index),
          // {
          //   ...item,
          //   isComplete:!isComplete
          // },
          // ...todos.slice(index+1)

          // ]
          todos:todos.map(i => i!==item ? {...i}:{...i, isComplete:!item.isComplete})
        })
     
    };
  }
  CheckAll(){
    this.setState({
      todos:[
      {
        ...this.state.todos[0],
        isComplete:!this.state.todos[0].isComplete
      },
       {
        ...this.state.todos[1],
        isComplete:!this.state.todos[1].isComplete
      },
       {
        ...this.state.todos[2],
         isComplete:!this.state.todos[2].isComplete
      },
      ]
       // todos:this.state.todos.map((item => {...item, isComplete:!item.isComplete}


      
    })
  }
 
  All(){
this.setState({
        filter:"all"
    })

  }
  Active(){

    this.setState({
        filter:"active"
    })
  }
  Completed(){
    this.setState({
        filter:"completed"
    })
  
  }
  onKeyUp(event){
    if(event.keyCode===13){
      let text=event.target.value;
      if(!text){
        return
      }
       this.setState({
        todos:[
        ...this.state.todos,
     {title:text,isComplete:false},
        ],
        value:""
    })
    }
  }
  onChange(event){
     this.setState({
        value:event.target.value
    })
  }
  render(){
let { todos, filter, value } =this.state;
if(filter==="active")
{
       todos=todos.filter(item =>
      item.isComplete===false)
  }
 else if(filter==="completed")
{
       todos=todos.filter(item =>
      item.isComplete===true)
  }
//   else if(filter==="all")
// {
//        todos=this.state.todos
//   }
  return (
    <div className="App">
      <div className="Header">
      <img src={Down} onClick={this.CheckAll} width="20" height="20" />
      <input type="text" value={value} onChange={this.onChange} onKeyUp={this.onKeyUp} placeholder="What needs to be done?"/>
      </div>
      {
        todos.map((item) => 
          <Todos item={item} onClick={this.CheckOne(item)} />
        )
      }
      <div className="Footer">
      <span>
      {
     todos.filter(item =>
      item.isComplete===false).length
} items left

      </span>
      <div>
      <button onClick={this.All}>All</button>
      <button onClick={this.Active}>Active</button>
      <button onClick={this.Completed}>Completed</button>
      </div>
      </div>
    </div>
  );
}
}

export default App;
