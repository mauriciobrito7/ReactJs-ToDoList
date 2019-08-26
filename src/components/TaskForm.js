import React, { Component } from 'react';

class TaskForm extends Component{

    state = {
        title:'',
        description: ''
    }
    
    onSubmit = event => {
        this.props.addTask(this.state)
        event.preventDefault() //detiene la propagación del evento
    }

    onChange = event => {
        //permite cambiar el estado
        console.log(event.target.name, event.target.value)
        this.setState({
            //Si lo colocamos entre corchetes interpreta el valor
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <form onSubmit= {this.onSubmit}> {/*Para escuchar el evento submit*/}
                <input 
                    type="text"
                    name="title"
                    placeholder="Write a task" 
                    onChange = { this.onChange } 
                    value = { this.state.title }/>

                <br/>
                <br/>
                <textarea 
                    name="description"
                    placeholder="Write a description" 
                    onChange = { this.onChange } 
                    value = { this.state.description }></textarea>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default TaskForm;