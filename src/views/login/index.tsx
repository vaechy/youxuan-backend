import React , { FC, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { useStore } from '@/store/index'
import { useHistory,NavLink } from "react-router-dom";
import { client } from '../../utils/request'
// mobx function 库
import { observer } from 'mobx-react-lite'
import './index.styl'


export const Login: FC = (props: any) => {
  let storage = window.localStorage
  // const user = useStore()
  let [data, setState] = useState({});
  const history =  useHistory()
  let onFinish = async (values: any) => {
    console.log(values);
    
    let ret = await client.callApi('Login', {username:values.username,password:values.password})
    // console.log(ret.res);
    console.log(ret);
    ret.res?.code
       // Error
    if (ret.isSucc) {
      message.success(ret.res.message)
      // console.log();
      if (ret.res.token) {
        storage['CHYYANXUANTOKEN'] = ret.res.token
        history.push('/personal')
      }
      
      return;
    }
    message.error(ret.err.message)
  };

  
  return (
    <>
      <section className="login">
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
}

