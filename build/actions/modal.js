/**
 * Action - modal
 * 控制模态窗口
 */

/*
 * action 类型
 */
//登入请求
export const MODAL_UPDATE = 'MODAL_UPDATE';
export const MODAL_CLEAN = 'MODAL_CLEAN';
/*
 * action 创建函数
 */
export function modalUpdate(data){
    return {
        type:MODAL_UPDATE,
        data
    }
}
export function modalClean(){
    return {
        type:MODAL_CLEAN
    }
}