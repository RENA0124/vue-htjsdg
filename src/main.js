import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false;

// Configure o Firebase com as suas credenciais
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app');
