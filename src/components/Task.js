import React, { Component } from 'react';

class Task extends Component{
    
    render() {
        /*Extraemos la propiedad props como task unicamente para poder usarla como constante */
        const {task} = this.props;

        return <div>
                { task.title } - 
                { task.description } - 
                { task.done } - 
                { task.id } 
                <input type="checkbox"></input>
                <button>
                    x
                </button>
       </div>
    }
}

export default Task;