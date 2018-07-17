import React from 'react';

export default class TodosList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <div className='input-wrapper'>
                    <input type="text" placeholder="Add to your summer checklist" ref="createInput" id='create-todo'/>
                </div>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;

        if (task) {
            this.props.createTask(task);
            this.refs.createInput.value = '';
        }
    }
}
