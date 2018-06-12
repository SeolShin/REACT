
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

/*
ReactDOM.render(
	<CardList />
	, document.getElementById('root'));
*/

ReactDOM.render(<App /> , document.getElementById('root'));
registerServiceWorker();
