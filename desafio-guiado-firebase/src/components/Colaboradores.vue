<template>
    <div>
        <form @submit.prevent="addColaborador">
            <input v-model="nuevoColaborador" placeholder="Nuevo colaborador" />
            <button type="submit">Agregar</button>
        </form>
        <ul>
            <li v-for="colaborador in colaboradores" :key="colaborador.id">
                {{ colaborador.id }} - {{ colaborador.nombre }}
                <button @click="deleteColaborador(colaborador.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { getFirestore, collection, onSnapshot, addDoc, doc, deleteDoc } from 'firebase/firestore';
import firebaseApp from '../firebaseconfig.js';
export default {
    data() {
        return {
            nuevoColaborador: '',
            colaboradores: []
        };
    },
    mounted() {
        // Cargar tareas existentes al montar el componente
        const db = getFirestore(firebaseApp);
        const colaboradoresRef = collection(db, 'colaboradores'); // "todos" es el nombre de la colección en Firestore
        onSnapshot(colaboradoresRef, (snapshot) => {
            this.colaboradores = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
        });
    },
    methods: {
        async addColaborador() {
            if (this.nuevoColaborador.trim() === '') return;
            const db = getFirestore(firebaseApp);
            const colaboradoresRef = collection(db, 'colaboradores');
            await addDoc(colaboradoresRef, { nombre: this.nuevoColaborador });
            this.nuevoColaborador = ''; // Limpiar el campo después de agregar
        },
        async deleteColaborador(colaboradorId) {
            const db = getFirestore(firebaseApp);
            const colaboradorRef = doc(db, 'colaboradores', colaboradorId);
            await deleteDoc(colaboradorRef);
        }
    }
};
</script>
