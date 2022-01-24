// import { useStore } from '@/store/index'
import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query"
import { Formik } from 'formik';
import './index.styl'
import {
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';



const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
export const Personal = () => {
  useQuery('user', async () => {
    return 
  })
  const s = 's'
    // const userStore = useStore()
    // const { getUser} = useStore()


  
  // useEffect(() => {
  //   console.log('dddd');
  // }, [userStore.getUser[0]])
  
  const fu = function () {
    
  }
  
  
    
  return (<div className='personal'>
    {/* <button onClick={fu} style={{width:'100%',backgroundColor:'pink'}}>{ userStore.getUser[0].username}111</button> */}
    <div ></div>
    {/* <Formik
      initialValues={{ username:userStore.getUser[0].username || '',password:userStore.getUser[0].password || ''}}
      onSubmit={(values, { setSubmitting }) => {
        userStore.setUser(values)
      }}
    >
      {({ values,handleChange,handleSubmit}) => {
        return (
        <Form
          {...formItemLayout}
          name="personal"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Username"
            tooltip="What do you want others to call you?"
            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
          >
              <Input name='username' value={values.username} onChange={ handleChange}/>
              
              
          </Form.Item>
          <Form.Item
            label="Password"
            tooltip="What do you want others to call you?"
          >
            <Input.Password name='password' value={values.password} onChange={ handleChange}/>
              
              
          </Form.Item>
     
    
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>   
          </Form.Item>
        </Form>)
      } }
    </Formik> */}
    </div>)
}






