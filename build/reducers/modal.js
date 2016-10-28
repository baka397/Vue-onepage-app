/**
 * Reducer - admin
 * 模态信息
 */

//导入action常量
import { MODAL_UPDATE,MODAL_CLEAN } from '../actions/modal';

//初始化state
const INIT_STATE = {
    "loading":false, //是否加载
    "alert":""       //错误提示
}

export default function modal(state = INIT_STATE, action) {
    switch (action.type) {
        case MODAL_UPDATE:
            return Object.assign({}, state, action.data);
            break;
        case MODAL_CLEAN:
            return Object.assign({}, INIT_STATE);
            break;
        default:
            return state;
    }
}