import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';

class App extends Component{
constructor(props){
  
  super(props);
  console.log("constructor");
  this.textInput = React.createRef();
    
}
state={
  Lists:[]
 } 
static getDerivedStateFromProps(props,state){
  console.log("getderivedstate",props)
  return state;
}
componentDidMount(){
  console.log("ASDASDcomponent")
}

OnClickHandler=()=>{
  var text=[]
  text=this.textInput.current.value
 this.setState({
  Lists: this.state.Lists.concat(text)
 
  //Lists: this.refs.textvalue.value
//<div>{this.state.Lists}</div>
 })
 this.textInput.current.value=''
}

deleteEventHandler=(i)=>{
  const updatedList=this.state.Lists
  updatedList.splice(i,1)
  this.setState({
  Lists: updatedList
 })
  
}

render(){
  console.log("render")
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
    <Fragment>
    <h1>To Do List</h1>
    <input type='text'  ref={this.textInput} />
    <button onClick={this.OnClickHandler}>Add</button>
    {Todo}

    </Fragment>

    

  )
}
}

export default App;
