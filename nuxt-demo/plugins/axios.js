import * as axios from 'axios'

let options = {
    baseURL:"HTTP://localhost:3000/api/fiw",
    timeout:15000000,
    headers:{"Content-Type":"application/x-www-form-urlencoded"}
}
let xhr ={
    get(url,params){
        return new Promise((resolve,reject)=>{
            axios.create(options).get(url,{params}).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url,params) {
        return new Promise((resolve,reject) => {
            axios.create(options).post(url, params).then(res => {
                resolve(res)
            }).catch(err => {

            })
        })
    },
}
// The server-side needs a full url to works
if (process.server) {
  // options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
    options.baseURL = `http://www.fooju.cn/fjw/`
}

// export default axios.create(options)
export default xhr
