import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
const vuetify = createVuetify({ components, directives });

// 创建Vue实例
const app = createApp(App);

app.use(vuetify);
// 挂载pinia
app.use(store);

app.use(router);
// 挂载实例
app.mount('#app');
