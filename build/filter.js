/**
 * 过滤器
 */
//加载依赖
import Vue from 'Vue';
//过滤函数
export function numberFilter(value){
    if(parseInt(value)<0){
        return '-'
    }
    return value
}
export function formatDate(dateString,format){
    if(!dateString) return '';
    var date=new Date(dateString);
    var year=date.getFullYear();
    var month=(date.getMonth()+1).toString();
    var day=date.getDate().toString();
    var hour=date.getHours().toString();
    var min=date.getMinutes().toString();
    var sec=date.getSeconds().toString();
    if(month.length<2) month='0'+month;
    if(day.length<2) day='0'+day;
    if(min.length<2) min='0'+min;
    if(sec.length<2) sec='0'+sec;
    var return_date=format.replace('YYYY',year);
    return_date=return_date.replace('MM',month);
    return_date=return_date.replace('DD',day);
    return_date=return_date.replace('hh',hour);
    return_date=return_date.replace('mm',min);
    return_date=return_date.replace('ss',sec);
    return return_date;
}
Vue.filter('number', numberFilter);
Vue.filter('date', formatDate)