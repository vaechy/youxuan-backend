// import { useStore } from '@/store/index'
import React, { useEffect, useState } from 'react';
import { client } from '@/utils/request'
import config from  '@/config/index'
import { useQuery } from "react-query"
import { Formik } from 'formik'
import { Alert } from 'antd'
import './index.styl'
import {
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';
import { IUser } from '@/shared/interface';



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
  // useEffect(() => {
  //   (async () => {
  //     let ret = await client.callApi('TokenLogin', { token: window.localStorage.getItem(config.tokenName) || '' })
  //       console.log(ret.res);
        
      
  //    })()
  // },[])
  const { data,isLoading,isError,status,error} = useQuery('user', async () => {
    let ret = await client.callApi('TokenLogin', { token: window.localStorage.getItem(config.tokenName) || '' })
    if (ret.isSucc) {
      return ret.res.userInfo
    } else {
      throw new Error(ret.err.message)
    }
  })
  if (isLoading) return <div>{ `---`}</div>
 
  if (error) return <div>{`${error}`}</div>
  return (<div className='personal'>
    <div>{ status}</div>
    <Formik
      initialValues={{ username:(data as IUser).username,password: (data as IUser).password}}
      // initialValues={{ username:'VAECHY',password: '123456'}}
      onSubmit={(values, { setSubmitting }) => {
        // console.log(values);
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
    </Formik>
    </div>)
}






