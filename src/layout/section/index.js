import Vue from 'vue';
import Section from './Section.vue';

export default function install() {
    Vue.component('b-section', Vue.extend(Section));
}
