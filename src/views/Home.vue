<template>
    <div class="app-home">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>

    </div>
    
</template>
<script>
    import Header from "../components/Header.vue"//引入header子组件
    import Footer from "../components/Footer.vue"
    export default{
        data(){ return {
           
        }},
        components:{//注册header子组件
            Header,
            Footer
        }
    }

</script>
