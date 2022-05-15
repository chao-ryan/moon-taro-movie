/* eslint-disable import/no-commonjs */
// 根据需要修改小程序id
const appId = "wxc20a4c75ec2fe653";

module.exports = {
  env: {
    NODE_ENV: JSON.stringify("production")
  },
  defineConstants: {
    ENVIRONMENT: JSON.stringify("test"),
    APP_ID: JSON.stringify(appId),
    BASE_URL: JSON.stringify("http://192.168.6.145:3040") // 真正的api
  },
  mini: {},
  h5: {},
  plugins: [
    // 引入 npm 安装的插件，并传入插件参数
    // ['@tarojs/plugin-mock'],
    ["@intasect/taro-plugin-mockjs"]
  ]
};
