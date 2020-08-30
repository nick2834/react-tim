import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { message, Spin } from 'antd';
axios.interceptors.request.use(
    config => {
        console.log(config)
        var dom = document.createElement('div');
        dom.setAttribute('id', 'loading');
        document.body.appendChild(dom)
        ReactDOM.render(<Spin wrapperClassName='react-loadings' size="large" tip="加载中...">

        </Spin>, dom)
        return config;
    },
    err => {
        message.warning("请求超时");
        return Promise.reject(err);
    }
)
// 返回后拦截
axios.interceptors.response.use(
    data => {
        if (data.status === 200) {
            document.body.removeChild(document.getElementById('loading'))
            let res = data.data;
            //请求状态判断
            if (res) {
                return res
            } else {
                return message.warning(res.msg)
            }

        } else {
            return Promise.reject(data);
        }
    },
    err => {

        return Promise.reject(err);
    }
);
class Http {
    static get(api, param) {
        return new Promise((res, rej) => {
            axios.get(api, param).then(result => {
                res(result);
            });
        })
    }
    static post(api, params) {
        return new Promise((res, rej) => {
            axios.post(api, params).then(result => {
                res(result);
            })
        });
    }
    static delete(api, params) {
        return new Promise((res, rej) => {
            axios.delete(api, params).then(result => {
                res(result);
            });
        })
    }
    static put(api, param) {
        return new Promise((res, rej) => {
            axios.put(api, param).then(
                (result) => {
                    res(result);
                }
            )
        })
    }
}
export default Http