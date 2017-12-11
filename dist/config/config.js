'use strict'
/**
 * Created by Administrator on 2017/11/24.
 */
// 测试环境api请求地址
// const protocol = 'http:'
const rootUrl1 = 'www.test.cocosurprise.com'
const rootUrl2 = 'open-center.test.cocosurprise.com'
// const rootUrl3 = 'http://192.168.1.48:8007'
const protocol = location.protocol + '//'
window.webApi = {
  HOME: {},
  // 文档中心
  DOCUMENT: {
    POST_API_APIDETAIL: protocol + rootUrl1 + '/tsh-api/api/apidetail'
  },
  // 登录
  LOGIN: {
    POST_LOGINUSER: rootUrl2 + '/tsh-mg/user/loginByUserPassword', // 校验用户名及密码
    POST_JUMPLOGIN: rootUrl2 + '/tsh-mg/login' // 跳转中台接口
  },
  // 找回密码
  RETRIEVEPSW: {
    POST_MODIFYPWDBYMOBFROMPAGE: rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByMobFormPage', // 通过手机号验证找回密码
    POST_MODIFYPWDBYUSERNAMEFROMPAGE: rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByNameFormPage', // 通过用户名验证找回密码
    POST_MODIFYPWDBYEMAILFROMPAGE: rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByEmailFormPage', // 通过邮箱验证找回密码
    POST_MODIFYPWDBYMOB: rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByMob', // 通过手机号和用户名找回密码
    POST_MODIFYPWDBYEMAIL: rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByEmail' // 通过邮箱找回密码
  }

}
window.sessionStorage.setItem('webApi', JSON.stringify(window.webApi))
