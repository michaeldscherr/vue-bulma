import Vue from 'vue';
import Content from './Content.vue';

export default function install() {
    Vue.component('bm-content', Vue.extend(Content));
}
