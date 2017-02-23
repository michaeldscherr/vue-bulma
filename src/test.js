import Vue from 'vue';
import VueBulma from './index';

Vue.use(VueBulma);

window.bmEventHub = new Vue();
window.bm = new Vue({
    el: '#app',
});
