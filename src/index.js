import Vue from 'vue';
import Box from './components/box';

const components = {
    Box,
};

components.install = () => {
    Object.keys(components).forEach((component) => {
        const installer = components[component];

        if (installer && component !== 'install') {
            Vue.use(installer);
        }
    });
};

export default components;
