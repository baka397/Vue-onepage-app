/**
 * Reducer - admin
 * 管理员信息
 */

//导入action常量
import { ADMIN_UPDATE,ADMIN_CLEAN } from '../actions/admin';

//初始化state
const INIT_STATE = {
    "status":0,  //登录状态，0-未登录，1-已登录
    "name":"",   //登录名
    "menus":[]   //可访问的菜单别名列表，我们预设了dashboard,list两个
}

export default function admin(state = INIT_STATE, action) {
    switch (action.type) {
        case ADMIN_UPDATE:
            let adminData={
                status:action.data.status,
                name:action.data.name,
                menus:action.data.menus.map((item)=>{
                    return Object.assign({},item);
                })
            }
            return Object.assign({}, state, adminData);
            break;
        case ADMIN_CLEAN:
            return Object.assign({}, INIT_STATE);
            break;
        default:
            return state;
    }
}