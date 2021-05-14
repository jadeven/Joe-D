import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            todo: [],
            fake: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.btnclick = this.btnclick.bind(this)

    }

    handleChange(event) {
        this.setState({ input: event }, () => console.log(event));
    }

    handleSubmit(event) {
        this.setState({
            input: '',
            todo: [...this.state.todo, { text: event, completed: false }],
        }, () => console.log('thisisstatet length' + this.state.todo))
    }

    btnclick(){
        // console.log(this.state.fake)
        let bjork = this.state.todo.filter(item=> item.completed === true)
        console.log('this is bjork ' + bjork)
        this.setState({
            fake : this.state.fake+1,
        }, () => console.log('todo completed length ' + this.state.todo))
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/completed">Show Completed</Link>
                        </li>
                        <li>
                            <Link to="/incomplete">Show Incomplete</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path="/">
                            <div>
                                <h1>Todo List</h1>
                                <label>

                                    <input type="text" value={this.state.input} onChange={(e) => this.handleChange(e.target.value)} />
                                </label>
                                <button onClick={() => this.handleSubmit(this.state.input)} type="submit" value="Submit" >Submit</button>
                                <ul>
                                    {this.state.todo.map((item, index) => {

                                        return <li key={index}> {item.text}
                                            {item.completed ? null : <button onClick={() => {
                                                this.state.todo[index].completed = true
                                                this.setState({ 
                                                todo: this.state.todo
                                            }, 
                                                () => console.log('test'))
                                                 }}>   Done</button>}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </Route>
                        <Route path="/completed">
                            <Completed todo={this.state.todo} dakine = {this.btnclick}/>
                        </Route>
                        <Route path="/incomplete">
                            <Incomplete  todo={this.state.todo}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

function Completed(props) {
    return (
        <div>
            <h2>done</h2>
            <button onClick = {props.dakine}>click</button>
            {props.todo.map((item, index) => { 
                return (<ul>
                    {item.completed 
                        ? <li key={index}>{item.text}</li>
                        : null
                    }
                </ul>)
            })}
        </div>
    );
}

function Incomplete(props) {
    return (
        <div>
            <h2>not done</h2>
            {props.todo.map((item, index) => { 
                return (<ul>
                    {!item.completed 
                        ? <li key={index}>{item.text}</li>
                        : null
                    }
                </ul>)
            })}
        </div>
    );
}
