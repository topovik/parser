import React from 'react'
import App from './App'
import { render } from 'react-dom'
import store from './store/createStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

render(<BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'))