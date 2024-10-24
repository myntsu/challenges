<template>
    <div>
        <h1>Chilean Products</h1>
        <ul>
            <li v-for="product in products">
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { getFirestore, collection, getDocs } from 'firebase/firestore';
    import firebaseApp from '../firebaseConfig';

    export default {
        name: 'FirebaseComponent',
        data() {
            return {
                products: [],
            }
        },

        async mounted () {
            try {
                const db = getFirestore(firebaseApp);
                const productsSnapshot = await getDocs(collection(db, 'products'));
                productsSnapshot.forEach((doc) => {
                    this.products.push(doc.data());
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
</script>