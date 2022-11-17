export default {
  SET_USER_NAME(state,username){
    state.username = username
  },
  //更改登录弹窗显示状态
  SET_LOGIN_DIALOG(state,loginDialog) {
    state.loginDialog = loginDialog
  },
  //更改图片弹窗显示状态
  SET_PICTURE_DIALOG(state,payload) {
    state.dialogPicture =payload.dialogPicture;
    state.imgUrl =payload.imgUrl;
  },
}