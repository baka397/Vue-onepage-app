/**
 * Reducer - dashboard
 * 控制台信息
 */

//导入action常量
import { DASHBOARD_UPDATE,DASHBOARD_CLEAN } from '../actions/dashboard';

//初始化state
const INIT_STATE = {
    "regNum":-1,     //注册信息
    "useNum":-1      //使用信息
}

export default function dashboard(state = INIT_STATE, action) {
    switch (action.type) {
        case DASHBOARD_UPDATE:
            return Object.assign({}, state, action.data);
            break;
        case DASHBOARD_CLEAN:
            return Object.assign({}, INIT_STATE);
            break;
        default:
            return state;
    }
}