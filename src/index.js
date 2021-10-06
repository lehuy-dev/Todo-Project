import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    {/* {/*  <ThemeProvider theme={theme}>*/}
        <App />
        <ToastContainer/>
     {/*  </ThemeProvider>*/}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
