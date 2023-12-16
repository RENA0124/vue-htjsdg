<!-- src/components/CarList.vue -->
<template>
<div>
  <h2>Lista de Carros</h2>
  <ul>
    <li v-for="car in cars" :key="car.id">{{ car.model }} - {{ car.brand }}</li>
  </ul>
</div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
data() {
  return {
    cars: [],
  };
},
created() {
  this.fetchCars();
},
methods: {
  async fetchCars() {
    try {
      const snapshot = await firebase.firestore().collection('cars').get();
      this.cars = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Erro ao recuperar carros:', error);
    }
  },
},
};
</script>
