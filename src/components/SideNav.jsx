import React from 'react'
import { Layout,Button,Avatar,Input} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { NavLink, Outlet } from 'react-router-dom'

export const SideNav = () => {

  const {Search} = Input;
  const {Sider} = Layout;
  return (
    <div style={{display:"flex"}}>
    <Layout className='layout' style={{flexGrow:0.1}} >
    <Sider className='sider'>
     <h1>Company Name</h1>
     <Search className='search' placeholder="search modules" />
     <h3>Client Master</h3>
     <Button className='btn1'>View Client</Button><br/>
     <NavLink to='add-client'><Button className='btn2'>Add Client</Button></NavLink>
     <div className='profile'>
     <div className='row'>
     <div className='col left'>
     <Avatar size="large" icon={<UserOutlined />} />
     </div>
     <div className='col right'>
     <p>James Button <br/><span>iames@thevouch.digital</span></p>
     </div>
     </div>
     </div>
    </Sider>
    </Layout>
    <Outlet/>
    </div >
  )
}


