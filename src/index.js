import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import { store } from './store/index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
