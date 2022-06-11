//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import AddTask from './dodajZadanie';
import TaskList from './listaZadan';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <AddTask />
        <TaskList />

      </div>
    )
  }
}

export default App;
