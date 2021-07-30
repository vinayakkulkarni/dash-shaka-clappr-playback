import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import pkg from '../package.json';

const extensions = ['.js', '.ts'];

const plugins = [
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
    output: 'dist/dash-shaka-clappr-playback.css',
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  beep(),
];

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * (c) ${new Date().getFullYear()} ${pkg.author.name}<${pkg.author.email}>
 * Released under the ${pkg.license} License
 */
`;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/dash-shaka-clappr-playback.esm.js',
      format: 'esm',
      name: 'DashShakaClapprPlayback',
      exports: 'named',
      sourcemap: true,
      banner,
    },
    {
      file: 'dist/dash-shaka-clappr-playback.cjs.js',
      format: 'cjs',
      name: 'DashShakaClapprPlayback',
      exports: 'named',
      sourcemap: true,
      banner,
    },
    {
      file: 'dist/dash-shaka-clappr-playback.js',
      format: 'umd',
      name: 'DashShakaClapprPlayback',
      exports: 'named',
      sourcemap: true,
      banner,
      globals: {
        '@clappr/core': 'core',
      },
    },
  ],
  plugins,
  external: ['@clappr/core'],
};
