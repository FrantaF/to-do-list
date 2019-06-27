import React from "react"

class TodoForm extends React.Component {
    state = {
        text: ''
      }
      
      render() {
        return (
          <form onSubmit={this.props.addItem}>
            <input className="todos-input" type="text" />
            <input type="submit"/>
          </form>
        )
      }
}


  export default TodoForm