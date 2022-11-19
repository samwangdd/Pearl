module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "root": ["./"],
        "extensions": [".ts", ".tsx"],
        "alias": {
          "@": "./src",
          "@/components": "./src/components",
          "@/pages": "./src/pages",
          "@/const": "./src/const",
          "@/utils": "./src/utils",
          "@/service": "./src/service",
          "@/types": "./src/types",
          "@/hooks": "./src/hooks"
          }
        }],
      'react-native-reanimated/plugin',
    ],
  };
};
