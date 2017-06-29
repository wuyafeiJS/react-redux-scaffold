import fetch from 'dva/fetch';
import { message } from 'antd';

//  let checkStatus=(response)=>{
//    if (response.status >= 200 && response.status < 300) {
//     return response;
//    }
//    const error = new Error(response.statusText);
//    error.response = response;
//    throw error;
//  }

 let handledata=(data)=>{
  if(!data) data={ msg: '请求出错，请稍后重试' };
  if(data.code === 0) {
    message.destroy();
    if(data.msg) message.success('操作成功',4);
    return data;
  }else {
    message.destroy();
    let error= new Error(data.msg);
    error.msg=data.msg;
    throw error;
  }
 }

let handleError=(err)=>{
   message.destroy();
   message.error(err.msg||'请求出错，请稍后重试',4);
}

/**
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default async function request(url, options) {
  const response = await fetch(url, options);
  try {
    const data = await response.json();
    //handledata(data);
    const ret = {
      data: data
    }
    return ret;
  } catch (err) {
    handleError(err)
  }
}