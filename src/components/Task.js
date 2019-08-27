import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types'


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
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}></input>
                <button style= {btnDelete} onClick = {this.props.deleteTask.bind(this, task.id)}> {/*bind para pasar para metros */}
                    x
                </button>
       </div>
    }
}

// De esta manera voy a especificar los tipos de datos de las propiedades
Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize:'18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor:'pointer'
}

export default Task;