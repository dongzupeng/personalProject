import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes.js'

Vue.use(VueRouter);
const router = new VueRouter({
  mode:'hash',
  routes,
});
// router.beforeEach((to, from, next) => {
//   //是否登录过
//   if (localStorage.getItem("tokens")) {
//     // 从登录页跳转主页
//     if (to.path === "/login") {
//       next(from);
//     } else if (to.path === "/") {
//       next("/userList");
//     } else {
//       return next();
//     }
//     // 没登录禁止去其他页面
//   } else if (to.path !== "/login") {
//     // this.$message({
//     //   message: '请先登录',
//     //   type: 'warning'
//     // });
//     return next("/login");
//   } else {
//     next();
//   }
// });
export default router;
