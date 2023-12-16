<!-- src/components/AddCar.vue -->
<template>
<div>
  <h2>Adicionar Carro</h2>
  <form @submit.prevent="addCar">
    <label for="brand">Marca:</label>
    <input type="text" v-model="newCar.brand" required>
    <label for="model">Modelo:</label>
    <input type="text" v-model="newCar.model" required>
    <button type="submit">Adicionar Carro</button>
  </form>
</div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
data() {
  return {
    newCar: {
      brand: '',
      model: '',
    },
  };
},
methods: {
  async addCar() {
    try {
      await firebase.firestore().collection('cars').add(this.newCar);
      this.$emit('carAdded');
      this.newCar = { brand: '', model: '' };
    } catch (error) {
      console.error('Erro ao adicionar carro:', error);
    }
  },
},
};
</script>
