
/**
 * Created by Administrator on 2017/11/24.
 */
// 测试环境api请求地址

const protocol = location.protocol + '//'
const rootUrl1 = window.WebUrl.lHost
const rootUrl2 = window.WebUrl.aHost
const Api = {
  HOME: {},
  // 文档中心
  DOCUMENT: {
    POST_API_APIDETAIL: protocol + rootUrl1 + '/tsh-api/api/apidetail'
  },
  // 登录
  LOGIN: {
    POST_LOGINUSER: protocol + rootUrl2 + '/tsh-mg/user/loginByUserPassword', // 校验用户名及密码
    POST_JUMPLOGIN: protocol + rootUrl2 + '/tsh-mg/login' // 跳转中台接口
  },
  // 找回密码
  RETRIEVEPSW: {
    POST_MODIFYPWDBYMOBFROMPAGE: protocol + rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByMobFormPage', // 通过手机号验证找回密码
    POST_MODIFYPWDBYUSERNAMEFROMPAGE: protocol + rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByNameFormPage', // 通过用户名验证找回密码
    POST_MODIFYPWDBYEMAILFROMPAGE: protocol + rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByEmailFormPage', // 通过邮箱验证找回密码
    POST_MODIFYPWDBYMOB: protocol + rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByMob', // 通过手机号和用户名找回密码
    POST_MODIFYPWDBYEMAIL: protocol + rootUrl2 + '/tsh-mg/distributionInfo/modifyPwdByEmail' // 通过邮箱找回密码
  }
}
window.WebUrl = null // 释放WebUrl变量
export default Api
