/**
 * Action - modal
 * 控制模态窗口
 */
import { API_LIST } from '../config';
import { modalUpdate,modalClean } from './modal';
/*
 * action 类型
 */
//登入请求
export const LIST_UPDATE = 'LIST_UPDATE';
export const LIST_CLEAN = 'LIST_CLEAN';
/*
 * action 创建函数
 */
export function listUpdate(data){
    return {
        type:LIST_UPDATE,
        data
    }
}
export function listClean(){
    return {
        type:LIST_CLEAN
    }
}
export function listPost(){
    return (dispatch, getState) => {
        dispatch(modalUpdate({
            'loading':true,
            'alert':''
        }));
        fetch(API_LIST).then(response => response.json())
                .then(json => {
                    if (json.head.status === 200) {
                        dispatch(modalClean());
                        dispatch(listUpdate(json.body));
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