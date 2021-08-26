import React, { Component } from 'react';
import { createTodo, getToDos, toggleCompleted } from './fetch-utils';

class ToDos extends Component {
    state = { todos: [] }
    componentDidMount = async() => {
        const data = await getToDos(this.props.token)
        this.setState({ todos: data })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const data = await createTodo(this.props.token, {todo: this.state.newToDo, completed: false});
        this.setState({newToDo: ''});
        this.setState((prevState) => ({ 
            todos: [...prevState.todos, data], }))
    };
    handleCompleted = async (todo) => {
       todo.completed = !todo.completed;
        const data = await toggleCompleted(this.props.token, todo);
        this.fetchTodos();
    }
   
    render() { 
        return ( 
             <>
             <section>
                {this.state.todos.map((todo) =>(
                    <div className='todo-item' key={todo.id}>
                    <input onChange={()=>this.handleCompleted(todo)} value={this.state.newToDo} type = 'checkbox'checked={todo.completed}></input>
                    <label>{todo.todo}</label>
                    </div>
                ))}

             </section>
             <section>
                 <form onSubmit={this.handleSubmit}>
                     <input  type='text' onchange={(e)=>this.setState({ newToDo: e.target.value })}></input>
                     <button></button>
                 </form>
             </section>
            </> 
         );
    }
}
 
export default ToDos;