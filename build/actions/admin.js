/**
 * Action - admin
 * 控制管理员
 */
import fetch from 'isomorphic-fetch';
import { modalUpdate,modalClean } from './modal';
import { API_LOGIN, API_LOGOUT } from '../config';
import router from '../router';

/*
 * action 类型
 */
//登入请求
export const ADMIN_UPDATE = 'ADMIN_UPDATE';
export const ADMIN_CLEAN = 'ADMIN_CLEAN';
/*
 * action 创建函数
 */
export function adminUpdate(data){
    return {
        type:ADMIN_UPDATE,
        data
    }
}
export function adminClean(){
    return {
        type:ADMIN_CLEAN
    }
}
export function adminPost(loginInfo){
    return (dispatch, getState) => {
        if(!loginInfo.username||!loginInfo.password){
            dispatch(modalUpdate({
                'alert':'请输入用户名或密码'
            }));
            return false;
        }
        dispatch(modalUpdate({
            'loading':true,
            'alert':''
        }));
        fetch(API_LOGIN).then(response => response.json())
                .then(json => {
                    if (json.head.status === 200) {
                        dispatch(modalClean());
                        dispatch(adminUpdate(json.body));
                        router.push({
                            name:json.body.menus[0]?json.body.menus[0].alias:'404'
                        });
                    } else {
                        dispatch(modalUpdate({
                            'loading':false,
                            'alert':json.head.msg
                        }));
                    }
                }).catch(error => {
                    console.log(error);
                    dispatch(modalUpdate({
                        'loading':false,
                        'alert':'出现错误'
                    }));
                })
    }
}
export function adminOutPost(loginInfo){
    return (dispatch, getState) => {
        dispatch(modalUpdate({
            'loading':true,
            'alert':''
        }));
        fetch(API_LOGOUT).then(response => response.json())
                .then(json => {
                    if (json.head.status === 200) {
                        dispatch(modalClean());
                        dispatch(adminClean(json.body));
                        router.push({name:'login'});
                    } else {
                        dispatch(modalUpdate({
                            'loading':false,
                            'alert':json.head.msg
                        }));
                    }
                }).catch(error => {
                    console.log(error);
                    dispatch(modalUpdate({
                        'loading':false,
                        'alert':'出现错误'
                    }));
                })
    }
}