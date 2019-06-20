import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login/login'
import Logout from './login/logout'
import { Router, Route, browserHistory } from 'react-router'

function usuarioLogado(nextState, replace) {
    const auth = localStorage.getItem('token')
    console.log(auth)
    if (auth === null || auth === "" || auth === undefined) {
        replace('/')
    }
}
ReactDOM.render(<Router history={browserHistory}>
    <Route path='/' component={Login} />

    <Route path='/dashboard' onEnter={usuarioLogado} component={App} >
        
    </Route>
    <Route path='/logout' component={Logout} />
    
</Router>, document.getElementById('root'));

// import { from } from 'rxjs';

