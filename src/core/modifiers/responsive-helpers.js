import {
    flattenDeep,
} from 'lodash';

export const screens = [
    'touch',
    'mobile',
    'tablet',
    'desktop',
    'widescreen',
];

export const verbs = [
    'only',
];

export const show = [
    'block',
    'flex',
    'inline',
    'inline-block',
    'inline-flex',
];

export const hide = [
    'hidden',
];

function getClassMap(baseClasses, mods) {
    baseClasses = [...baseClasses];
    return flattenDeep(baseClasses.map((base) => (
        mods.map((mod) => `${base}-${mod}`)
    )));
}

export default (function responsiveHelpers() {
    const classMap = [];
    [show, hide].forEach((base) => {
        const mods = [screens, verbs];
        let classes = [...base].map((item) => `is-${item}`);
        classMap.push(classes);
        while (mods.length) {
            const tmpClasses = getClassMap(classes, mods.shift());
            classMap.push(tmpClasses);
            classes = tmpClasses;
        }
    });
    return flattenDeep(classMap);
}());
