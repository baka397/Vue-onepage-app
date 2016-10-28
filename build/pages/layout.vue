<template>
    <div class="app">
        <p>欢迎使用</p>
        <sidebar :menus="admin.menus" @onLogout="onLogout"></sidebar>
        <router-view></router-view>
        <div v-show="modal.loading">
            加载中...
        </div>
        {{modal.alert}}
    </div>
</template>
<script>
    import store from '../store';
    import {adminOutPost} from '../actions/admin';
    import Sidebar from '../components/sidebar.vue'; //载入组件
    module.exports = {
        data(){
            return {
                admin: this.$select('admin'),
                modal: this.$select('modal')
            }
        },
        components:{
            Sidebar
        },
        methods:{
            onLogout(){
                store.dispatch(adminOutPost());
            }
        }
    }
</script>
<style scoped>
.app{
    overflow: hidden;
    font-size: 14px;
    color: #333;
}
</style>