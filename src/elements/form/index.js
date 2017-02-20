import Vue from 'vue';
import Label from './Label.vue';
import Help from './Help.vue';
import Input from './Input.vue';

export default function install() {
    Vue.component('bm-label', Vue.extend(Label));
    Vue.component('bm-help', Vue.extend(Help));
    Vue.component('bm-input', Vue.extend(Input));
}
