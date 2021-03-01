import 'whatwg-fetch';
import './styles.css';
import React from 'react';
import { render } from 'react-dom';
import Router from './pages/Routes';

render(<Router />, document.getElementById('root'));
