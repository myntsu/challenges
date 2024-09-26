<template>
    <div>
        <form action="" @submit.prevent>
            <div>
                <h2>Inicio de sesión</h2>
                <input type="email" v-model="email" placeholder="Correo electrónico">
                <input type="password" v-model="password" placeholder="Contraseña">

                <button @click="signIn">Iniciar Sesión</button>
                <router-link to="/register">¿No tienes cuenta? Regístrate</router-link>
            </div>

        </form>
    </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from "../auth.js";

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async signIn() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                const redirecPath = this.$route.query.redirect || '/';
                this.$router.push(redirecPath);
            } catch (error) {
                console.error("Error al iniciar sesión", error);
            }
        }
    },
}
</script>