//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import AddTask from './dodajZadanie';
import TaskList from './listaZadan';

class App extends Component {

  state = {
    tasks : [
      {
        id : 0,
        message: 'zamówić wakacje',
        date: '2022-06-30',
        important: true,
        active: true,
      },
      {
        id : 1,
        message: 'kupić prezent na urodziny',
        date: '2022-06-30',
        important: true,
        active: true,
      },
      {
        id : 2,
        message: 'skosić trawę',
        date: '2022-06-30',
        important: false,
        active: true,
      }
    ]
  }
  render() {
    return(
      <div className='App'>
        <AddTask />
        <TaskList tasks={this.state.tasks}/>

      </div>
    )
  }
}

export default App;
