import './styles/index.css';
import 'vfonts/Lato.css'

import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import errorHandler from './utils/error-handler';

createApp(App)
  .use(i18n)
  .use(errorHandler)
  .mount('#app');
