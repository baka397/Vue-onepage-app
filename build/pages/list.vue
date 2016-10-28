<template>
    <table-component :title="title" :datas="datas"></table-component>
</template>
<script>
    import store from '../store';
    import {listPost,listClean} from '../actions/list';
    import {formatDate} from '../filter';
    import TableComponent from '../components/table.vue'; //载入组件
    module.exports = {
        data(){
            return {
                title: ['名称','使用量','注册时间'],
                list: this.$select('list')
            }
        },
        computed:{
            datas(){
                return Object.keys(this.list).map((key)=>{
                    let item=Object.assign({},this.list[key]);
                    return [item.name,item.useNum,formatDate(item.regTime,'YYYY-MM-DD hh:mm:ss')];
                });
            }
        },
        components:{
            TableComponent
        },
        created(){
            store.dispatch(listPost());
        },
        beforeDestroy(){
            store.dispatch(listClean());
        }
    }
</script>
<style scoped>
</style>