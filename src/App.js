import React from 'react';
import TodoForm from "./TodoForm"
import './App.css';
import TodoItem from './TodoItem';

class App extends React.Component {

  state = {
    todos: [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: true }
    ],

    lastItemId: 2
   
  }

  addItem = (event) => {
    event.preventDefault()        
    let stateTodosCopy = this.state.todos    
    let task = document.querySelector(".todos-input").value;
    if(task === "") {return}
    let id = this.state.lastItemId + 1;    
    let newObject = { id: id , task: task, done: false };    
    stateTodosCopy.push (newObject);      
    document.querySelector(".todos-input").value = "";
    this.setState({todos: stateTodosCopy, lastItemId: id});
    
  }

  removeItem = (event) => {
    let itemId = event.target.id
    let stateTodosCopy = this.state.todos       
    for(let i = 0; i<stateTodosCopy.length; i++){      
      if(stateTodosCopy[i].id == itemId){
        stateTodosCopy.splice(i,1);
      }
    }
    this.setState({todos: stateTodosCopy});    
  }

  completeTask = (event) => {
    let taskId = event.target.id.split("-")[1];    
    let stateTodosCopy = this.state.todos       
    for(let i = 0; i<stateTodosCopy.length; i++){      
      if(stateTodosCopy[i].id == taskId){
        stateTodosCopy[i].done = true
      }
    }
    this.setState({todos: stateTodosCopy}); 

  }

  render(){
    return (
      <>
      <TodoForm addItem={this.addItem}/>      
      <ul>
        {this.state.todos.map(item => {
          return(      
            <>                     
            {item.done ? <TodoItem taskCompleted={"task-completed"} completeTask={this.completeTask} item={item} removeItem={this.removeItem}></TodoItem>             
            :
            <TodoItem taskCompleted={""} completeTask={this.completeTask} item={item} removeItem={this.removeItem}></TodoItem>    
            }         

            
            </>
          )
        })}

      </ul>
      </>
    );
  }
}

export default App;
