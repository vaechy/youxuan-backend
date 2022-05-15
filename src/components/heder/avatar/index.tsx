import { Avatar as AntAvatar} from 'antd';
import './index.styl'
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Router, useNavigate } from 'react-router-dom'



export const Avatar = (props: any) => {
  let navigate  = useNavigate()
  const exit = () => {
    navigate('/login')
  }
  const menu = (
    <Menu key="1">
      <Menu.Item key="2">
        <Link  to="/personal">个人资料</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <div onClick={ exit }>退出登录</div>
      </Menu.Item>
      
    </Menu>
  );
  
  let action = () => {
    
    
  }
  return (
    <>
      
      <Dropdown overlay={menu}>
        <div className="avatar" onClick={e => { e.preventDefault()}}>
            <AntAvatar icon={<UserOutlined />} />
        </div>
      </Dropdown>,

    </>
  )
}


