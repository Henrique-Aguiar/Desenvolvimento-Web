import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import { Abc } from './template/Abc';
import { App } from './template/App';
import { Page404 } from './template/Page404';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Menu />
            <Switch>
                <Route path={'/abc/:slug?'} component={Abc} />
                <Route path={'/'} component={App} exact />
                <Route path={'*'} component={Page404} />
            </Switch>
        </React.StrictMode>
    </BrowserRouter>,
);
