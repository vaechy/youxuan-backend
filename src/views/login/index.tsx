import React , { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Header from '@/components/heder';
import { useHistory,NavLink } from "react-router-dom";
import { client } from '../../utils/request'
import {  renderRoutes } from "react-router-config"
// import { UserStore } '@/store/user'
import './index.styl'


export const Login = (props:any) => {
  let [data, setState] = useState({});
  const history =  useHistory()
  let onFinish = async (values: any) => {
    console.log(values);
    
    let ret = await client.callApi('cms/Login', {username:values.username,password:values.password})
    // console.log(ret.res);
    console.log(ret);
    ret.res?.code
       // Error
    if (!ret.isSucc) {
        alert('error:  ' + ret.err.message);
        return;
    }
  
    // Success
    // alert('Success: ' + ret);

    if (ret.res.code == 1) {
      message.success(ret.res.msg)
      history.push('/dashboard')
    } else {
      message.error(ret.res.msg)
    }
   
    
  };

  const send = async () => {
    let ret = await client.callApi('cms/Login', { username: 'ssss', password: 'ssss' })
    // console.log(ret.res);
    console.log(ret.res);
  }
  
  return (
    <>
          <section className="login">
      <Header/>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </section>
    </>

  );
};

