import axios from 'axios'

let config = 'http://47.107.168.158:8080/api/v1/'

axios.defaults.timeout = 5000; //设置超时时间
axios.defaults.baseURL = 'http://47.107.168.158:8080/api/v1/'; //这是调用数据接口

axios.interceptors.request.use(
  config => {
    console.log(config);

    const token = localStorage.getItem("token"); //获取存储在本地的token
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json', //设置跨域头部,虽然很多浏览器默认都是使用json传数据，但咱要考虑IE浏览器。
      'token': token,
      'X-Requested-With': 'XMLHttpRequest'
    };
    if (token) {
      config.headers.Authorization = "Token " + token; //携带权限参数
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);


// // http response 拦截器（所有接收到的请求都要从这儿过一次）
// axios.interceptors.response.use(
//   response => {
//       //response.status===401是我和后台约定的权限丢失或者权限不够返回的状态码，这个可以自己和后台约定，约定返回某个自定义字段也是可以的
//       if (response.status == 401) {
//           router.push({ //push后面是一个参数对象，可以携带很多参数，具体可以去vue-router上查看，例如query字段表示携带的参数
//               path: '/login'
//           })
//       }
//       return response;
//   },
//   error => {
//       return Promise.reject(error.response.data)
//   });


export const request = {
  apiGet: (url, param = {}) => {
    return new Promise((resolve, reject) => {
      axios.get(config + url, {
        params: param
      }).then(response => {
        resolve(response.data);
      }).catch(err => {
        reject(err)
      })
    })
  },
  apiPost: (url, param = {}) => {
    return new Promise((resolve, reject) => {
      axios.post(config + url, param)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
    })
  }
}