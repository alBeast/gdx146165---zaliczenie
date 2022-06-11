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

  deleteTask = (id) => {
    // console.log(`usunieto zadanie o id: ${id}`);
    let tasks = [...this.state.tasks] //kopia tablicy
    // console.log(tasks);
    tasks = tasks.filter(task => task.id !== id) //zmiana zawartości tablicy
    this.setState({
      tasks
    })
    //setState - aktualizacja state
  }

  changeActiveTask = (id) => {
    console.log(`przeniesiono zadanie o id: ${id}`);
  }


  render() {
    return(
      <div className='App'>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeActiveTask}/>

      </div>
    )
  }
}

export default App;
