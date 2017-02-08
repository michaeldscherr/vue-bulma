import Vue from 'vue';
import Hero from './Hero.vue';

export default function install() {
    Vue.component('bm-layout-hero', Vue.extend(Hero));
}
