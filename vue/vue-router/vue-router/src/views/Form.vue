<template>
    <div>
        <h1>{{ entryTitle }}</h1>
        <router-link :to="paginate(false)">Previous</router-link>
        <router-link :to="paginate(true)">Next</router-link>
    </div>
</template>

<script>
export default {
    name: 'form',
    methods: {
        paginate(nextPage) {
            let entry = parseInt(this.$route.params.entry)

            if(nextPage){
                return entry < 10 ? `/form/${entry+1}` : `/form/${entry}`;
            } else {
                return entry > 1 ? `/form/${entry-1}` : `/form/${entry}`;
            }
        }
    },

    computed: {
        entryTitle(){
            return `Blog Entry ${this.$route.params.entry}`;
        }
    }
}
</script>

<style>
@media (min-width: 1024px) {
    .form {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid: 0%;
    }

    form {
        display: grid;
        gap: .25rem;
    }
}
</style>