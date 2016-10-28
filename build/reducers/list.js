/**
 * Reducer - list
 * 列表信息
 */

//导入action常量
import { LIST_UPDATE,LIST_CLEAN } from '../actions/list';

//初始化state
const INIT_STATE = {}

export default function list(state = INIT_STATE, action) {
    switch (action.type) {
        case LIST_UPDATE:
            let listObject={};
            action.data.forEach((item)=>{
                listObject[item.id]=Object.assign({},item);
                delete listObject[item.id].id;
            });
            return Object.assign({}, state, listObject);
            break;
        case LIST_CLEAN:
            return Object.assign({}, INIT_STATE);
            break;
        default:
            return state;
    }
}