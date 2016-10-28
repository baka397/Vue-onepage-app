<template>
    <form class="form" @submit.prevent="onSubmit">
        <div><label>用户名：</label><input type="text" placeholder="请输入用户名" ref="username" /></div>
        <div><label>密码：</label><input type="password" placeholder="请输入密码" ref="password" /></div>
        <div><button type="submit">提交</button></div>
    </form>
</template>
<script>
    import store from '../store';
    import {adminPost} from '../actions/admin';
    module.exports = {
        methods:{
            onSubmit(){
                store.dispatch(adminPost({
                    username:this.$refs.username.value,
                    password:this.$refs.password.value
                }))
            }
        }
    }
</script>
<style scoped>
    .form div{
        margin: 10px 0;
        overflow: hidden;
        line-height: 30px;
    }
    .form label{
        display: inline-block;
        float: left;
        width: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .form input{
        height: 20px;
        widows: 150px;
        padding: 5px 10px;
    }
</style>