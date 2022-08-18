const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    stats: {
        chunkOrigins: true,
        chunkGroups: true,
        all: false,
        assets: true,
        chunks: true,
        optimizationBailout: true,
        chunkModules: true,
        source: true,
        errors: true,
        errorDetails: true,
        warnings: true,
        hash: true,
        version: true,
        timings: true,
        builtAt: true,
        entrypoints: true,
        chunkRelations: true,
        dependentModules: true,
        ids: true,
        nestedModules: true,
        modulesSpace: Infinity,
        chunkModulesSpace: Infinity,
        nestedModulesSpace: Infinity,
        assetsSpace: Infinity,
        cachedAssets: true,
        usedExports: true,
        providedExports: true,
        modulesSort: 'depth',
        // chunkModulesSort: 'name',
        // nestedModulesSort: false,
        chunksSort: 'false',
        assetsSort: '!size'
    }
};
