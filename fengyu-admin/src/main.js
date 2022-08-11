import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import axios from "axios";
import { ElLoading } from "element-plus";

const app = createApp(App);
axios.defaults.baseURL = "http://127.0.0.1:8082";
// app.config.globalProperties.$http = axios;

//配置请求拦截器
let loadingInstance = null;
axios.interceptors.request.use((config) => {
  //展示loding效果
  loadingInstance = ElLoading.service({ fullscreen: true });
  //配置token认证
  config.headers.Authorization = "token";
  console.log(config);
  return config;
});
// 配置响应拦截器
axios.interceptors.response.use((response) => {
  //关闭loading效果
  loadingInstance.close();
  console.log(response);
  return response;
});

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
