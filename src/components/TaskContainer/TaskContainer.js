import React from 'react';
import './TaskContainer.scss';

import TaskBox from '../Task/TaskBox';
import TaskInput from "./TaskInput/TaskInput";


export default class TaskContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            tasks: []
        };
        this.setState = this.setState.bind(this);
        this.addTask = this.addTask.bind(this);
        this.toggleDisabled = this.toggleDisabled.bind(this);
        this.i = 0;
    }

    addTask(task) {
        this.setState(() => {
            const state = this.state;
            state.tasks.push(task);
            return state;
        });
    }

    toggleDisabled(task) {
        task.done = !task.done;
        this.forceUpdate();
    }

    render() {
        return (
            <div className='TaskContainer'>
                <TaskInput addTask={this.addTask}/>
                {this.state.tasks.concat()
                    .sort((taskOne, taskTwo) => {
                        return taskOne.done - taskTwo.done;
                    }).map(task => {
                        return <TaskBox
                            content={task.content}
                            disabled={task.done}
                            key={this.i++}
                            toggleDisabled={() => {
                                this.toggleDisabled(task);
                            }}
                        />;
                    })}
            </div>
        );
    }
};
