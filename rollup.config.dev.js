import babel from "rollup-plugin-babel";

const getBabelConfig = require("./get-babel-config");

export default {
  input: "src/index.js",
  plugins: [babel(getBabelConfig({ modules: false }))],
  output: [
    {
      file: "lib/lab-to-xyz.cjs.js",
      format: "cjs"
    },
    {
      file: "lib/lab-to-xyz.es.js",
      format: "es"
    },
    {
      file: "lib/lab-to-xyz.js",
      format: "umd",
      name: "labToXyz"
    }
  ]
};
