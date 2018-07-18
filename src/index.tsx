import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {default as App} from './App';
import './index.css';
import rootReducer from './redux/reducers'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
             <App />
        </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
