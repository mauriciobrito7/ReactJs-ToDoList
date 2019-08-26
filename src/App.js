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

  //El método render se encarga de mostrar o cargar la interfaz en el navegador
  render() {
    return <div>
      <TaskForm/>
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}

export default App;
