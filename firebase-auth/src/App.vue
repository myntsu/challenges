<template>
  <div id="app">
    <h1>Mi primer hosting de Firebase</h1>
    <router-link to="/">Home</router-link>
    <router-link v-if="isLoggedIn" to="/secret">Secret</router-link>
    <router-link v-if="!isLoggedIn" to="/registro">Registro</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <button v-if="isLoggedIn" @click="logout">Cerrar sesión</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { auth, signOut, onAuthStateChanged } from './auth.js';

export default {
  
  data() {
    return {
      isLoggedIn: false
    }
  },

  created() {
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user;
    })
  },

  methods: {
    async logout() {
      await signOut(auth);
      this.$router.push('/login');
    }
  }
}

</script>

<style scoped>
</style>