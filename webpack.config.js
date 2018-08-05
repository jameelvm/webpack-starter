const path = require('path');
module.exports = {
    module: {

    },
    mode: "development",
    entry: {
        index: ["./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "[name].js"
    },
    devServer: {
        inline: true
    },
    devtool: 'source-map',
}