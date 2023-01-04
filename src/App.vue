<template>
  <Login v-if="checkLogin == true"></Login>
  <div v-if="checkLogin == false">
     <Header></Header>
     <SileBar />
     <router-view></router-view>
     </div>
 </template>
 
 <script>
 import Header from "./components/Header.vue";
 import SileBar from "./components/SileBar.vue";
import router from './router';
 import Login from "./view/login.vue"
 import { ref } from "vue";
 export default {
   name: 'App',
   components: {
     Header,
     SileBar,
     Login
   },
   setup() {
    const loggedIn = localStorage.getItem("user");
    const checkLogin = ref(false);
    if(loggedIn == null){
      router.push("/login");
      checkLogin.value = true
    }else{
      checkLogin.value = false
    }
    return { checkLogin };
   },
 }
 </script>
 
 <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   margin-top: 60px;
 }
 </style>
 