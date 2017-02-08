export default (function sizes() {
    const obj = {};
    Array.from({ length: 11 }, (v, i) => {
        obj[i + 2] = `is-${i + 2}`;
        return true;
    });
    return obj;
}());
