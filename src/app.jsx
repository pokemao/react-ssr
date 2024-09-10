import React from 'react'
import {Route} from 'react-router-dom'
import Index from './container'
import About from './container/about'

export default (
    <>
        <Route path='/' exact Component={Index}></Route>
        <Route path='/about' exact Component={About}></Route>
    </>
)
