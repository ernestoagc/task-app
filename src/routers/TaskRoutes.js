import React from 'react'
import {
    Switch, Route, Redirect 
  } from 'react-router-dom';
import { TaskIndex } from '../pages/Task/TaskIndex'; 
import { Navbar } from '../components/shared/Navbar'

export const TaskRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
            <Switch>
                <Route exact path="/task" component={TaskIndex} />
            </Switch>
            </div>
        </>
    )
}
