import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Greeter from './Greeter'
import LikeButton from './LikeButton';
const Display = () => {
    let likeButtons = []
    for (let i = 0; i < 100; i++)
        likeButtons.push(<LikeButton />)
    return <> <Greeter />{ likeButtons }</>
}

/*
ReactDOM.render(
    <>
        <Greeter />
        <LikeButton />
    </ >
    , document.getElementById('root'));
    // */
ReactDOM.render(
    <Display />, document.getElementById("root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
