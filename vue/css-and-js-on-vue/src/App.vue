<script>

export default {
  data() {
    return {
      showText: false,
      week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      cars: ['Ford', 'Chevrolet', 'Toyota', 'Honda'],
    }
  }
}

</script>

<template>
<div id="app">

  <label for="show">Show</label>
  <input v-model="showText" type="checkbox" name="" id="show">
  <p v-if="showText">Harry Houdini</p>
  <p v-else="showText">It wasn't as expected!</p>

  <h3>Days of the week</h3>
  <ul>
    <li v-for="day in week">{{ day }}</li>
  </ul>

  <h3>Select your favorite car</h3>
  <select name="cars" id="cars">
      <option v-for="car in cars">{{ car }}</option>
  </select>

</div>
</template>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 100%;
    margin-top: 10rem;
  }

  p {
    margin: 0;
  }
</style>