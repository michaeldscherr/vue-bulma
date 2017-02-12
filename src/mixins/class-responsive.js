export default {
    computed: {
        classResponsive() {
            if (!this.breakpoints) {
                return [];
            }
            const breakpoints = Object.entries(this.breakpoints);
            return breakpoints.map(([key, value]) => (
                `is-${value}-${key}`
            ));
        },
    }
};
