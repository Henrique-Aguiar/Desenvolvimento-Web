import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import { Abc } from './template/Abc';
import { App } from './template/App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Menu />
            <Switch>
                <Route path={'/abc/:slug?'} component={Abc} />
                <Route path={'/'} component={App} />
            </Switch>
        </React.StrictMode>
    </BrowserRouter>,
);
