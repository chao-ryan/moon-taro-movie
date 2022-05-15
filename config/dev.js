/* eslint-disable import/no-commonjs */

// 根据需要修改小程序id
const appId = "wx4f1abf7f92833937";

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    ENVIRONMENT: JSON.stringify("development"),
    APP_ID: JSON.stringify(appId),
    BASE_URL: JSON.stringify("http://192.168.6.145:3040") // 真正的api
  },
  mini: {},
  h5: {}
};
