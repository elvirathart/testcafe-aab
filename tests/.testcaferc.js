const os = require('os');

module.exports = {
    src: "tests*.js",
    browsers: ["chromium:headless"],
    concurrency: os.cpus().length / 2, // use all physical cores
}
