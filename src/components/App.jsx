import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import '../components/App.css'
import { Layout} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input} from 'antd';
import { Button} from 'antd';
import { Breadcrumb } from 'antd';
import {BsThreeDotsVertical} from 'react-icons/bs'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: 'Phone No',
    dataIndex: 'Phone',
    key: 'phone',
  },

  {
    title: 'Contact Person',
    dataIndex: 'cp',
    key: 'cp',
  },
  {
    title: 'Facilitator',
    dataIndex: 'facilitator',
    key: 'facilitator',
  },

  {
    title: 'Sites',
    dataIndex: 'sites',
    key: 'sites',
  },

  {
    title: 'Tenants',
    dataIndex: 'Tenants',
    key: 'Tenants',
  },
  {
    title: 'Tenant Grade',
    dataIndex: 'tg',
    key: 'tg',
  },

  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () =>  <BsThreeDotsVertical/>
  },

];
const data = [
  {
    key: '1',
    name: 'Infosys',
    Email: 'management@infosys.com',
    Phone: '+91 9563214587',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Wipro',
    Email: 'management@wipro.com',
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Accenture',
    Email: 'management@accenture.com',
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const items = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];

const {Sider, Content } = Layout;
const { Search } = Input;
const suffix = (
  <AudioOutlined style={{fontSize: 16,color: '#1890ff', }}/>
);
const onSearch = (value) => console.log(value);
const App = () => (
  <>
    <Layout>
      <Layout className='layout'>
        <Sider className='sider'>
         <h1>Company Name</h1>
         <Search className='search' placeholder="search modules" onSearch={onSearch} style={{ width: 180,}}/>
         <h3>Client Master</h3>
         <Button className='btn1'>View Client</Button><br/>
         <Button className='btn2'>Add Client</Button>
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
        </Sider>


        <Content className='content'>
          <h1 style={{fontSize:24,marginLeft:25,color:' #030037'}}>View Client
          <Breadcrumb>
          <Breadcrumb.Item>Client Master</Breadcrumb.Item>
          <Breadcrumb.Item>
          <a href="" style={{color:'#B8BABC'}}>View Client</a>
          </Breadcrumb.Item>
          </Breadcrumb>
          </h1>

          <div className='body'>
            <div className='header'>
            <Search className='headersearch' placeholder="search modules" onSearch={onSearch} style={{ width: 250,}}/>
            <div className="dropdown">
            <Dropdown menu={{items,selectable: true, defaultSelectedKeys: ['3'],}} >
            <Typography.Link>
            <Space> Columns
            <DownOutlined />
            </Space>
            </Typography.Link>
            </Dropdown>
            <button>hi</button>
            </div>
            </div>
            <Table columns={columns} dataSource={data} />;
          </div>
          

          
        </Content>

      </Layout>
    </Layout>


  </>
);
export default App;