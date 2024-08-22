<script>

export default {
  name: 'App',
  data() {
    return {
      courseName: '',
      cityName: 'https://picsum.photos/400/300',

      selectOptionDog: 'https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg',
      selectOptionCat: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/800px-Cat_November_2010-1a.jpg',
      selectOptionWhale: 'https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg',
      selectedAnimal: ''
    }
  }
}

</script>

<template>

  <div id="app">
    <h1>Welcome to the course! <span>
        {{ courseName }}
      </span>
    </h1>

    <input v-model="courseName">

    <h2>Mi favorite city</h2>
    <img :src="cityName">

    <h2>Select your favorite animal:</h2>
    <div>
      <select v-model="selectedAnimal" name="selectAnimal" id="selectAnimal" placeholder="Select your animal">
      <option :value="selectOptionDog">Dog</option>
      <option :value="selectOptionCat">Cat</option>
      <option :value="selectOptionWhale">Whale</option>
    </select>
    </div>

    <div>
      <img :src="selectedAnimal" :alt="selectedAnimal">
    </div>

  </div>

</template>

<style scoped>
span {
  color: hsl(170 40% 70%);
}
</style>
