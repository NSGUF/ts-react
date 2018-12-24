// side-effect imports
// tslint:disable:no-import-side-effect
import 'antd/dist/antd.css';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import rootReducer from './redux/reducers/root-reducer';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Home} from './pages/home';

const store = createStore(rootReducer);
const Root = (
    <Provider store={store}>
        <HashRouter>
            <Home/>
        </HashRouter>
    </Provider>
);

render(Root, document.getElementById('root'));
registerServiceWorker();
