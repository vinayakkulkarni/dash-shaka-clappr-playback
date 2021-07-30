import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import pkg from '../package.json';

const extensions = ['.js', '.ts', '.vue'];

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * (c) 2021 ${pkg.author.name}<${pkg.author.email}>
 * Released under the ${pkg.license} License
 */
`;

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/dash-shaka-clappr-playback.min.js',
    format: 'umd',
    name: 'VClappr',
    exports: 'named',
    strict: true,
    sourcemap: true,
    banner,
    globals: {
      '@clappr/core': 'core',
    },
  },
  plugins: [
    alias({
      entries: {
        Clappr: '@clappr/core/src/main.js',
      },
    }),
    resolve({
      extensions,
      browser: true,
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs({
      extensions,
      include: 'node_modules',
      exclude: 'src/**',
    }),
    scss({
      output: 'dist/dash-shaka-clappr-playback.min.css',
      outputStyle: 'compressed',
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript'],
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }),
    beep(),
  ],
  external: ['@clappr/core'],
};
