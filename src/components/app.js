import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

import Logo from '../images/logo_1.png';

const todos = [
    {
        task: 'Pink flamingo pool floatie'
    },
    {
        task: 'Donut pool floatie'
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div className="content">
                <div className="header">
                    <img src={Logo} />
                </div>
                <div className="main">
                    <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                    <TodosList
                        todos={this.state.todos}
                    />
                </div>
            </div>
        );
    }

    createTask(task) {
        this.state.todos.push({
            task
        });
        this.setState({ todos: this.state.todos });
    }
}
