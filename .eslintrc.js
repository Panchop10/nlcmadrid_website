module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "extends": [
        "airbnb-base",
        "plugin:vue/recommended"
    ],
    "rules": {
      "vue/no-use-v-if-with-v-for": "off",
    },
    "settings": {
        'import/resolver': {
            "webpack": {
                "config": require.resolve('@vue/cli-service/webpack.config.js')
            }
        },
    }
}
