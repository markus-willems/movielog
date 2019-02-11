module.exports = function(api) {
    api.cache.never();
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                },
            ],
            ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
            '@babel/preset-react',
        ],
    };
};
