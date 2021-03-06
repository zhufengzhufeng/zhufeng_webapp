import React from 'react';
import {render} from 'react-dom';
//在这里 先渲染container下的index.js ，再在这个文件下确定渲染哪一个组件
import App from './containers';
import {Provider} from 'react-redux';
//渲染App组件 App组件中渲染对应的路由

//应用configureStore，将store传递给App组件
import {configureStore} from './store';

const store = configureStore();
//将store 注入到App组件中
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
