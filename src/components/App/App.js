import React from 'react';
import './App.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from '@fortawesome/free-solid-svg-icons';

import {CSSTransition} from 'react-transition-group';
import TaskContainer from "../TaskContainer/TaskContainer";


function App() {
    const [showText, setShowText] = React.useState(false);
    const [animateLogo, setAnimateLogo] = React.useState(false);
    const [showTaskContainer, setShowTaskContainer] = React.useState(false);
    setTimeout(() => {
        setShowText(true);
    }, 200);
    setTimeout(() => {
        setAnimateLogo(true);
    }, 1000);
    setTimeout(() => {
        setShowTaskContainer(true);
    }, 1500);

    return (
        <div className='App'>
            <CSSTransition
                in={animateLogo}
                classNames='logo-animation'
                timeout={10000}
                className='logo-container'
            >
                <div>
                    <CSSTransition
                        in={true}
                        classNames='enter-transition'
                        appear
                        timeout={1000}
                    >
                        <div className={'main-icon-container'}>
                            <FontAwesomeIcon icon={faList} className={'main-icon'}/>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={showText}
                        classNames='enter-transition'
                        timeout={1000}
                    >
                        <p className='main-title'>TODO by Gieted</p>
                    </CSSTransition>
                </div>
            </CSSTransition>
            <CSSTransition
                in={showTaskContainer}
                classNames='enter-transition'
                timeout={1000}
                mountOnEnter
            >
                <div>
                    <TaskContainer/>
                </div>
            </CSSTransition>
        </div>
    );
}

export default App;
