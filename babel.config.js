module.exports = function (api) {
  api.cache(true);

  var presets = [ "@babel/preset-env", "@babel/preset-react", "minify" ];
  var plugins = [
    "add-module-exports",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties"
  ]

  return {
    presets,
    plugins
  };
}
