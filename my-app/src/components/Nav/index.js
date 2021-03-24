
import React from 'react';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';

import {CheckList} from '../../components/CheckList/CheckList.js'
import PersonForm from '../../components/Login'
import {PageCheckList} from '../../pages/checklist'
import {Home} from  '../../components/Home'
import './styles.css'

export const Navigation = () => {

    return <BrowserRouter>
        <nav className = 'navbar'>
            <Link to = '/Home' className="link">Home</Link>
            <Link to = '/CheckList' className="link">CheckList</Link>
            <Link to = '/Login' className="link">Login</Link>
        </nav>
        <Switch>
            <Route path = '/Home' component = {Home}/>
            <Route path = '/CheckList' component = {PageCheckList}/>
            <Route path = '/Login' component = {PersonForm}/>
        </Switch>
    </BrowserRouter>
}

