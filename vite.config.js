
import path from 'path';
import framework7 from 'rollup-plugin-framework7';



const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www',);

export default {
  plugins: [
    framework7({ emitCss: false }),

  ],
  css: {
    modules: {
      scopeBehaviour: 'global'
    }
  },
  root: SRC_DIR,
  base: '',
  publicDir: PUBLIC_DIR,
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },
  server: {
    host: true,
  },
  esbuild: {
    jsxFactory: '$jsx',
    jsxFragment: '"Fragment"',
  },
};
