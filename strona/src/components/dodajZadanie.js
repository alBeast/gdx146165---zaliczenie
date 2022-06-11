import { Component } from "react";

class AddTask extends Component {
    state = {
        message: '',
        checked: false

    }
    render() {
        return (
            <div>
                <h2>Dodaj nowe zadanie</h2>
                <div className ='form'>
                    <input type ='text' placeholder="treść zadania" value={this.state.message}/>
                    <input type='checkbox' id='important' checked={this.state.checked}/>
                    <label htmlFor='important'>Oznacz jako priorytet</label><br />
                    <label htmlFor='date'>Do kiedy wykonać: </label>
                    <input type='date' min='2022-06-11' max='2022-12-31'/> <br/>
                    <button>Dodaj nowe zadanie</button>
                </div>
            </div>
        )
    }
}

export default AddTask