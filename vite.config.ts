/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-25 17:45:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-25 23:16:27
 * @FilePath: \auto-size\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcsspxtoviewport from 'postcss-px-to-viewport-8-plugin';
import path  from 'path'
import autoprefixer from 'autoprefixer'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

const loderPxtovw1 = postcsspxtoviewport({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: file => {
    let num = 375;
    if (file.indexOf('vant') !== -1) {
      num = 375;
    }
    return num;
  }, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ['*','!border','!font-size'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  // selectorBlackList: ['van-'], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
  selectorBlackList:[],
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
  // exclude: [/^(?!.*node_modules\/vant)/] //忽略除vant之外的
  exclude: [],
  landscape: false, // 是否处理横屏情况
  // include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
  include:undefined,//需要转换的文件，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)，如果值是一个正则表达式，将包含匹配的文件，否则将排除该文件， 如果传入的值是一个数组，那么数组里的值必须为正则
})

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve:{
    alias:{
      '/@': path.resolve(__dirname,'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          // 自动添加前缀
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8"
            //'last 2 versions', // 所有主流浏览器最近2个版本
          ],
          grid: true
        }),
        loderPxtovw1,
      ]
    }
  },
  server:{
    host:'0.0.0.0',
    port:8080,
    strictPort:false,
    https:false,
    open:true,
    proxy: {
       // 正则表达式写法：http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      //  '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, ''),
      // },
      // 使用 proxy 实例
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy 是 'http-proxy' 的实例
      //   }
      // },
    }
  }
})
