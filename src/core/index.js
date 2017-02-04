export default function install() {
    if (install.installed) {
        console.warn('Vue Bulma is already installed.');
        return;
    }
    install.installed = true;
}
