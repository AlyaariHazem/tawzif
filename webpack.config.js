const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const shareAll = mf.shareAll;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "startupTemplate",
    publicPath: "auto",
    filename: "[name].[contenthash].js",
    clean: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For hosts (please adjust)
      remotes: {},

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: false,
          requiredVersion: false, //"auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: false,
          requiredVersion: false, //"auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: false,
          requiredVersion: false, //"auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: false,
          requiredVersion: false, //"auto",
        },
        "@angular/forms": {
          singleton: true,
          strictVersion: false,
          requiredVersion: false, //"auto",
        },
        rxjs: {
          singleton: true,
          strictVersion: false,
          requiredVersion: false, //"auto"
        },
        // primeng: {
        //   singleton: true,
        //   strictVersion: false,
        //   requiredVersion: false, //"auto",
        // },
        // primeflex: {
        //   singleton: true,
        //   strictVersion: false,
        //   requiredVersion: false, //"auto",
        // },
        // primeicons: {
        //   singleton: true,
        //   strictVersion: false,
        //   requiredVersion: false, //"auto",
        // },
        // "@ngx-translate/core": {
        //   singleton: true,
        //   strictVersion: false,
        //   requiredVersion: false,
        // },
        // 'data-trans-library': { singleton: true, strictVersion: false, requiredVersion: false },
        // "@angular/google-maps":{
        //   singleton: true,
        //   strictVersion: true,
        //   requiredVersion: false
        // }
         //   ,
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
