import React from 'react'
import './styling.css'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={list:['ibadah','coding','makan']}
    }
    klik = () => {
        let input = document.getElementById('text').value
        let list = [...this.state.list]
        list.push(input)
        this.setState({list:list})
    }
    button = (i) => {
        let templis = [...this.state.list]
        templis.splice(i, 1)
        this.setState({list:templis})
    }
    show = (a) => {
    
        return this.state.list.map((a, b) => <tr>
            <td>{a}</td>
            <td><button  className='button' onClick={b => this.button(b)}>X</button></td>
        </tr>)
    }
    
    render() {
        return (
            <div id='container'>
                <h1>To Do list Exercise</h1>
                <div id='input'>
                <input ref='list' placeholder='masukan input' id='text' type="text" />
                <button  onClick={this.klik}>Add</button>
                </div>
                <table id='table'>
                    <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.show()}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default App