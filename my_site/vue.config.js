module.exports = {
    transpileDependencies: ["vuetify"],
    publicPath: "/mysite/",
    devServer: {
        host: '0.0.0.0',
        allowedHosts: [
            'div.tcgmg.com',
        ],
        port: 8080,
    }
};
