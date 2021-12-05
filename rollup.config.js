import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
export default {
  input: './src/index.js',
  output: {
    file: './lib/bundle.js',
    format: 'esm'
  },
  plugins: [babel(), postcss()],
  // external 代表的是从外部引入的包
  external: ['react']
}