import {message} from 'antd';
import axios from 'axios';
// @ts-ignore
import {hashHistory} from "react-router";

interface IOptions {
    method: string;
    url: string;
    data: object;
}

class Axios {
    public options: IOptions;

    public get(options: IOptions) {
        this.options = options;
        return new Promise((resolve, reject) => {
            const urlPrefix:string = '/service';
            axios({
                method: options.method || 'POST',
                url: urlPrefix + options.url,
                data: options.data || {}
            }).then((response) => {
                const data = response.data;
                const code = data.code.toLowerCase();
                if (code === 'ok') {
                    // @ts-ignore
                    resolve(data.result, data)
                }
                if (code === 'warn') {
                    message.warning(data.summary);
                    return
                }
                if (code === 'sys_error') {
                    message.error('服务错误');
                    return
                }
                if (code === 'session_timeout') {
                    message.warning('会话过期,请重新登录');
                    setTimeout(() => {
                        hashHistory.replace('/login')
                    },         2000);
                    return
                }
                if (code !== 'ok' && code !== 'warn' && code !== 'sys_error') {
                    reject(data.summary)
                }
            })
        })
    }
}

export {Axios}