import babel from "rollup-plugin-babel";
import minify from "rollup-plugin-babel-minify";

const getBabelConfig = require("./get-babel-config");

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

export default {
  input: "src/index.js",
  plugins: [
    babel(getBabelConfig({ modules: false })),
    minify({ comments: false, sourceMap: false })
  ],
  output: {
    file: "lib/lab-to-xyz.min.js",
    format: "umd",
    name: "labToXyz"
  }
};
