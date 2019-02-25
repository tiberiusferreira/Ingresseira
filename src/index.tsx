import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
// import thunkMiddleware from 'redux-thunk'
import {default as App} from './App';
import './index.css';
import rootReducer from './redux/reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer,
);

ReactDOM.render(
    <Provider store={store}>
             <App />
        </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
