import React, { Component } from 'react';
import './Task.css';
class Task extends Component{

    styleCompleted() {
        return {
            fontSize: '20px',
            color:this.props.task.done ? 'gray' : 'black', //operador ternario, si la propiedad task.done es true coloca el texto en gris sino en negro
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    
    render() {
        const {task} = this.props;
        /*Extraemos la propiedad props como task unicamente para poder usarla como constante */

        return <div style= {this.styleCompleted()}>
                { task.title } - 
                { task.description } - 
                { task.done } - 
                { task.id } 
                <input type="checkbox"></input>
                <button style= {this.btnDelete}>
                    x
                </button>
       </div>
    }

    btnDelete = {
        fontSize:'18px',
        background: '#ea2027',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '50%',
        cursor:'pointer'
    }
}

export default Task;