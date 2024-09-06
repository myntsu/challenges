<script>
import axios from 'axios';
export default {
  data() {
    return {
      weathers: [],
      indicadores: [],
    }
  },

  methods: {
    async getWeather() {
      try {
        const url = 'https://api.gael.cloud/general/public/clima';
        const { data } = await axios.get(url);
        return data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },

    async setWeather() {
      const weathers = await this.getWeather();
      this.weathers = weathers;
    },

    async getIndicadores() {
      try {
        const url = "https://mindicador.cl/api";
        const { data } = await axios.get(url);
        const indicadoresArray = Object.values(data).filter(indicador => indicador.codigo);
        return indicadoresArray;
      } catch (error) {
        console.error('Error buscando indicadores económicos', error);
      }
    },

    async setIndicadores() {
      const indicadores = await this.getIndicadores();
      this.indicadores = indicadores;
    },
  }
}

</script>

<template>
  <div id="#app">

    <div>
      <h1>Indicadores</h1>
      <button @click="setIndicadores">Cargar Indicadores</button>
      <table>
        <thead>
          <tr>
            <th v-for="indicador in indicadores" :key="indicador.codigo">
              {{ indicador.codigo }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="indicador in indicadores" :key="indicador.codigo">
              {{ indicador.valor }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h1>Weather</h1>
    <button @click="setWeather">Check the Weather</button>
    <ul>
      <li v-for="weather of weathers">
        {{ weather.Estacion }} - {{ weather.Temp }}
      </li>
    </ul>

  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid rgb(37, 28, 54);
}
</style>