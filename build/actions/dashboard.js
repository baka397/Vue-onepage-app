/**
 * Action - modal
 * 控制模态窗口
 */
import { API_DASHBOARD } from '../config';
import { modalUpdate,modalClean } from './modal';
/*
 * action 类型
 */
//登入请求
export const DASHBOARD_UPDATE = 'DASHBOARD_UPDATE';
export const DASHBOARD_CLEAN = 'DASHBOARD_CLEAN';
/*
 * action 创建函数
 */
export function dashboardUpdate(data){
    return {
        type:DASHBOARD_UPDATE,
        data
    }
}
export function dashboardClean(){
    return {
        type:DASHBOARD_CLEAN
    }
}
export function dashboardPost(){
    return (dispatch, getState) => {
        dispatch(modalUpdate({
            'loading':true,
            'alert':''
        }));
        fetch(API_DASHBOARD).then(response => response.json())
                .then(json => {
                    if (json.head.status === 200) {
                        dispatch(modalClean());
                        dispatch(dashboardUpdate(json.body));
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