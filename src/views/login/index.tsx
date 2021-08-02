import React , { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.styl'
import { client } from '../../utils/request'
const NormalLoginForm = () => {
  const [data, setState] = useState({});
  console.log(data);
  console.dir(setState);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const send = async () => {
    let ret = await client.callApi('cms/Login', { username: 'ssss', password: 'ssss' })
    // console.log(ret.res);
    console.log(ret.res);
    
    console.log('--------------');
    
  }

  return (
    <section className="login">
      <button onClick={send}>发送</button>
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

  );
};

export default NormalLoginForm;
