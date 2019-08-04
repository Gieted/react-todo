import React from 'react';
import './TaskBox.scss';
import {Box} from 'bloomer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

export default class TaskBox extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    
    render() {
        return (
            <div className='TaskBox'>
                <Box className={`task-container ${this.props.disabled ? 'is-disabled' : ''}`}>
                    <FontAwesomeIcon
                        icon={this.props.disabled ? faTimes : faCheck}
                        className={this.props.disabled ? 'cross-icon' : 'done-icon'}
                        onClick={() => this.props.toggleDisabled()}
                    />
                    <span className={`task-content ${this.props.disabled ? 'is-disabled' : ''}`}>{this.props.content}</span>
                </Box>
            </div>
        );
    }
}
