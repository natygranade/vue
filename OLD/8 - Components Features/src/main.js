import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';
import App1 from '../Lessons/1-starting-setup/src/App1.vue'
import App2 from '../Lessons/2-scoped-styles/src/App-2.vue'

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.component('app-1', App1);
app.component('app-2', App2);

app.mount('#app');
