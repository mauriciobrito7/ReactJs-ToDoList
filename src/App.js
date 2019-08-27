import React, { Component} from 'react';
import './App.css';

import tasks from './sample/task.json';
//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component{
  /** Un estado lo que hace es definir los datos que pertenecen a un componente */
  state = {
    tasks: tasks
  }

  addTask = (task) => {
    //nuevo nodo en memoria
    const newTask = { 
      title: task.title,
      description: task.description,
      id: this.getLength()
    }
    this.setState({
      tasks: [ ...this.state.tasks, newTask] //Se esta concatenando o agregando algo nuevo al arreglo que ya teniamos
    })
    console.log(this.getLength())
  }

  deleteTask = (id) => { 
    const newTasks = this.state.tasks.filter(task => task.id !== id) //Va devolver un nuevo arreglo sin tomar en cuenta algunos casos (como el id que le estamos pasando sea igual)
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = id => {
    //se almencena el nuevo arreglo
    const newTasks  = this.state.tasks.map(task =>{
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    // actualizamos el estados con el nuevo arreglo
    this.setState({tasks: newTasks})
  }

  getLength = () => {
    return this.state.tasks.length
  }

  //El método render se encarga de mostrar o cargar la interfaz en el navegador
  render() {
    return <div>
      <TaskForm addTask = { this.addTask }/>
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/> {/*pasaremos deleteTask para llegar hasta el componente hijo Task*/}
    </div>
  }
}

export default App;
