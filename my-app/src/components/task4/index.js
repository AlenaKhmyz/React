import React from 'react';

class TodoList extends React.Component {

    state = {
        tasks: [
            {text: 'learn react', id: 'first'},
            {text: 'call friend', id: 'second'},
            {text: 'play guitar', id: 'third'}
        ]
    }

    onAddTask = () => {
        const nextTasks = [... this.state.tasks, 'new item'];

        this.setState({ tasks: nextTasks });
    }

    render () {
        return (
            <div>
                { this.state.tasks.map((item) => {
                    return <div key={item.id}>{item.text}</div>
                })}
                <button onClick={this.onAddTask}>add task</button>
            </div>
        )   
    }
}

export default TodoList;