import React from 'react';
import {useState} from 'react';
import './TaskInput.scss';
import {Input} from 'bloomer';
import Task from "../../../objects/Task";


const ENTER_KEY = 13;

export default function TaskInput(props) {
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div className='TaskInput'>
            <Input
                type='text'
                className='is-rounded'
                placeholder='Input new tasks here!'
                value={inputValue}
                onKeyDown={event => {
                    if (event.keyCode !== ENTER_KEY) {
                        return;
                    }

                    if (event.target.value === '') {
                        return;
                    }
                    
                    props.addTask(new Task(event.target.value));
                    setInputValue('');

                    event.preventDefault();
                }}
                onChange={event => {
                    let input = event.target.value;
                    input = input.charAt(0).toUpperCase() + input.slice(1);
                    setInputValue(input);
                }}
            />
        </div>
    );
}
