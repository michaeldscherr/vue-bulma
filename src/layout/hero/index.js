import Vue from 'vue';
import Hero from './Hero.vue';

export default function install() {
    Vue.component('b-layout-hero', Vue.extend(Hero));
}
