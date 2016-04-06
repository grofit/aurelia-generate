export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-generate');

    aurelia.start().then(a => a.setRoot('src/app'));
}