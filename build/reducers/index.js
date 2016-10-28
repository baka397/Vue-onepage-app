/**
 * Reducer - index
 * 汇总
 */
import { combineReducers } from 'redux';//加载reducer合并方法
//载入reducer
import admin from './admin';
import modal from './modal';
import dashboard from './dashboard';
import list from './list';
export const reducer = combineReducers({
    admin,
    modal,
    dashboard,
    list
});