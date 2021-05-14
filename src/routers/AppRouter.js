import React, { useContext } from 'react'


import {
    BrowserRouter as Router,
    Route,
    Switch,Redirect
  } from 'react-router-dom';
import { TaskRoutes } from './TaskRoutes';


export const AppRouter = () => {
    return (
        <div>
            <Router>
            <div>
                <Switch>
                    <Route path ="/"  component={TaskRoutes} />
                </Switch>
                </div>
            </Router>
        </div>
    )
}
