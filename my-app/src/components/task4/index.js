import React from 'react';

class TodoList extends React.Component {

    state = {
        tasks: ['learn react', 'call friend', 'play guitar']
    }

    onAddTask = () => {
        const nextTasks = [... this.state.tasks, 'new item'];

        this.setState({ tasks: nextTasks });
    }

    render () {
        return (
            <div>
                { this.state.tasks.map((item) => {
                    return <div>{item}</div>
                })}
                <button onClick={this.onAddTask}>add task</button>
            </div>
        )   
    }
}

export default TodoList;