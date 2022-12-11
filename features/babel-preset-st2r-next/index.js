module.exports = function () {
    return {
        "presets": ["next/babel"],
        "plugins": [
            ["@babel/plugin-proposal-decorators", { "legacy": true }]
        ]
    }
}