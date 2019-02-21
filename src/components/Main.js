import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Information from '../containers/Information'
import FormContainer from '../containers/FormContainer'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Information}/>
      <Route path='/FormContainer' component={FormContainer}/>
    </Switch>
  </main>
)

export default Main