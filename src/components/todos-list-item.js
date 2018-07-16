import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='action-wrapper'>
                <input type="checkbox" id="task" />
                <label for="task">{ this.props.task }</label>
            </div>
        );
    }
}
