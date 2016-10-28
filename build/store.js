/**
 * app
 */

//加载依赖
import Vue from 'Vue';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Revue from './lib/revue'; //载入修改后的reven
import {reducer} from './reducers/index';

//插入中间件
let createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)
let reduxStore;

if(process.env.NODE_ENV==='production'){
  reduxStore = createStoreWithMiddleware(reducer,{});
}
else{//载入redux debug插件
  function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState, 
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
  }
  // Store
  reduxStore = configureStore({});
}
// binding the store to Vue instance
const store = new Revue(Vue, reduxStore);
// expose the store for your component to use
export default store;