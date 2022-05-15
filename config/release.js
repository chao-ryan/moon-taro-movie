/* eslint-disable import/no-commonjs */
// 根据需要修改小程序id
const appId = "wxc20a4c75ec2fe653";

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    ENVIRONMENT: JSON.stringify("release"),
    APP_ID: JSON.stringify(appId),
    BASE_URL: JSON.stringify("http://192.168.6.145:3040") // 真正的api
  },
  mini: {},
  h5: {}
};
