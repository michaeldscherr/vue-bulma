import {
    flattenDeep,
    size,
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

export default flattenDeep([
    [...show, ...hide].map(baseClass => {
        const className = `is-${baseClass}`;
        return [
            className,
            screens.map((screen) => {
                const screenName = `${className}-${screen}`;
                return [
                    screenName,
                    verbs.map((verb) => {
                        const verbName = `${screenName}-${verb}`;
                        return [
                            verbName,
                        ];
                    }),
                ];
            }),
        ];
    }),
]);
