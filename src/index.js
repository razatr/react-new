import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'
import './index.css'
import App from './App'
import store from './store'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#7986cb',
            main: '#fff',
            dark: '#303f9f',
        },

    },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root'),
)
