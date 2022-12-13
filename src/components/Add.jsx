import React, { useMemo, useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import '../components/Add.css'
import { Layout, message } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import { Tabs } from 'antd';
import { Profile } from './Profile';
import { Steps } from 'antd';

const suffix = (
  <AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />
);


const Add = () => {

 

  const steps = useMemo(() => [
    {
      title: 'First',
      content:  <p>hello world</p>,
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ],[]);

  // return(


  {/* <Layout> */ }
  {/* <Layout className='layout'>
        <Sider className='sider'>
         <h1>Company Name</h1>
         <Search className='search' placeholder="search modules" onSearch={onSearch} style={{ width: 180,}}/>
         <h3>Client Master</h3>
         <Link to='/client-list'><Button className='btn1'>View Client</Button></Link><br/>
         <Link to='/add-client'><Button className='btn2'>Add Client</Button></Link>
         <div className='profile'>
         <div className='row'>
         <div className='col left'>
         <Avatar size="large" icon={<UserOutlined />} style={{marginTop:12,}}/>
         </div>
         <div className='col right'>
         <p>James Button <br/><span>iames@thevouch.digital</span></p>
         </div>
         </div>
         </div>
        </Sider> */}


  {/* <Content className='content'>
          <h1 style={{fontSize:24,marginLeft:25,color:' #030037'}}>Add Client
          <Breadcrumb>
          <Breadcrumb.Item>Client Master</Breadcrumb.Item>
          <Breadcrumb.Item>
          <Link to='/add-client'>Add Client</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item style={{color:'#B8BABC'}}>Add Profile</Breadcrumb.Item>
          </Breadcrumb>
          </h1>

          <div className='body'>
            <div className='header'>
            <Tabs className='tab'
            defaultActiveKey="1" onChange={onChange} items={[
      {
        label: <Link to='/add-client'><h1 className='tab-title'>01 CREATE PROFILE</h1></Link>,
        key: '1',
        children:
        
        <div style={{marginTop:5,marginLeft:25}}>
        <h1 style={{display:'inline'}}>Create Client Profile</h1>
        <p style={{paddingTop:0,marginTop:0,fontSize:14}}>Add some basic information related to the client</p>
        <Profile/>
        </div>
,
      },
      {
        label: <Link to='#'><h1 className='tab-title'>02 PAYMENT SETUP</h1></Link>,
        key: '2',
        children: `Content of Tab Pane 2`,
      },
      {
        label: <Link to="#"><h1 className='tab-title'>03 THEME SETUP</h1></Link>,
        key: '3',
        children: `Content of Tab Pane 3`,
      },
      {
        label: <Link to="#"><h1 className="tab-title">04 MODULES SETUP</h1></Link>,
        key: '4',
        children: `Content of Tab Pane 4`,
      },
    ]}
  />
            </div>
          </div>
          

          
        </Content>

      </Layout> */}
  {/* </Layout> */ }


  // );

  const [current, setCurrent] = useState(0);
  

  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const next = () => {
    items[current+1].disabled = false;
    setCurrent(current => current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = useMemo(() => steps.map((item, index) => {

    if (index === 0) {
      return {
        key: item.title,
        title: item.title,
        disabled: false,
      }
    }
    else {
      return {
        key: item.title,
        title: item.title,
        disabled: true,
      }
    }

  }),[]) ;

   console.log(items)

   useEffect(() =>{
    return () => {
      console.log("add client unmounted");
      items.map((item,index) => {
        if(index === 0)
        {return item}

       return item.disabled = true
      })
    }
   },[])

  return (
    <>
      <Steps size='small' current={current} items={items}
        onChange={onChange} className="site-navigation-steps" type="navigation" />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  )

}

export default Add;