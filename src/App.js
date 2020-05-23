import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';

class App extends React.Component{
constructor(props){
  super(props)
   this.state={
  Lists:[]
 } 
}


OnClickHandler=()=>{
 this.setState({
  Lists: this.state.Lists.concat(this.refs.textvalue.value)
  //Lists: this.refs.textvalue.value
//<div>{this.state.Lists}</div>
 })
this.refs.textvalue.value=''
}

deleteEventHandler=(i)=>{
  const updatedList=this.state.Lists
  updatedList.splice(i,1)
  this.setState({
  Lists: updatedList
 })
  
}

render(){
  
let Todo=null

Todo=(
    <div>
    {this.state.Lists.map((divel,index)=>{
      return <List click={()=>this.deleteEventHandler(index)} 
      name={divel}
      key={index}/>
       console.log(Todo)
    })}
    </div>)



   return(
    <div>

    <h1>To Do List</h1>
    <input type='text' ref="textvalue" />
    <button onClick={this.OnClickHandler}>Add</button>
    {Todo}

      

    </div>

  )


}
}

export default App;
