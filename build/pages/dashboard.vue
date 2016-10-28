<template>
    <table-component :title="title" :datas="datas"></table-component>
</template>
<script>
    import store from '../store';
    import {dashboardPost,dashboardClean} from '../actions/dashboard';
    import {numberFilter} from '../filter';
    import TableComponent from '../components/table.vue'; //载入组件
    module.exports = {
        data(){
            return {
                title:[],
                dashboard: this.$select('dashboard')
            }
        },
        computed:{
            datas(){
                return [['注册量','使用量'],[numberFilter(this.dashboard.regNum),numberFilter(this.dashboard.useNum)]];
            }
        },
        components:{
            TableComponent
        },
        created(){
            store.dispatch(dashboardPost());
        },
        beforeDestroy(){
            store.dispatch(dashboardClean());
        }
    }
</script>
<style scoped>
</style>