import {
    isArray,
} from 'lodash';

export const normalizeToArray = (value) => (
    isArray(value) ? value : [value]
);
