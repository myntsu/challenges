<script>
  export default {
    name: 'App',
    data() {
      return {
        cardTitle: 'Card Title',
        cardText: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        cardButtonCta: 'Go somewhere'
      }
    }
  }
</script>

<template>
  <div id="app">

    <!-- Card -->
    <article class="card">

      <!-- Card header -->
      <div class="card__header">
        <img src="https://placehold.co/300x200" alt="Placeholder image">
      </div>

      <!-- Card body -->
      <div class="card__body">
        <h3> {{ cardTitle }} </h3>
        <p> {{ cardText }} </p>
        <button> {{ cardButtonCta }} </button>  
      </div>

    </article>
  </div>
</template>

<style scoped>
  .card {
    width: 20rem;
    max-width: 100%;
    border: 1px solid hsl(0 0% 91% / .2);
    border-radius: .5rem;
    overflow: hidden
  }


  .card__header img {
    display: block;
    width: 100%;
  }

  .card__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .75rem;
    padding: 1rem;
  }

  .card__body h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .card__body p {
    font-size: 1.1rem;
  }

  .card__body button {
    padding: .5rem .75rem;
    color: inherit;
    background-color: hsl(216, 98%, 52%);
    border: none;
    border-radius: .25rem;
    cursor: pointer;
    font-size: 1rem;
  }
</style>
