<template>
    <ul v-show="menus.length>0" class="sidebar">
        <li v-for="(menu,index) in menus" :key="index"><router-link :to="{name:menu.alias}">{{menu.name}}</router-link></li>
        <li><a href="/" @click.prevent="onHandleLogout">登出</a></li>
    </ul>
</template>
<script>
    module.exports = {
        props: {
            'menus':{
                type: Array,
                required: true
            }
        },
        methods:{
            onHandleLogout(){
                this.$emit('onLogout');
            }
        }
    }
</script>
<style scoped>
.sidebar{
    float: left;
    padding: 0;
    margin: 0 30px 0 10px;
}
.sidebar li{
    margin: 0 0 20px;
    list-style: none;
}
.sidebar li a{
    padding: 5px 10px;
    color: #666;
    text-decoration: none;
}
.sidebar li a:hover{
    text-decoration: underline;
}
.sidebar li a.router-link-active{
    color: #08C;
}
</style>