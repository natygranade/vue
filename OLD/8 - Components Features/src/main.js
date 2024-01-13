import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';
import App1 from '../Lessons/1-starting-setup/src/App1.vue'

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.component('app-1', App1);

app.mount('#app');
