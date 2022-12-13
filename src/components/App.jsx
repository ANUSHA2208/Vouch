import React, { useRef, useState } from 'react';
import { Button,Layout,Breadcrumb, Input,Popover , Space, Table, Dropdown, Typography } from 'antd';
import '../components/App.css'
import Highlighter from 'react-highlight-words';
import { AudioOutlined,DownOutlined,SearchOutlined,EyeOutlined,EditOutlined} from '@ant-design/icons';
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiBlock} from 'react-icons/bi'
import {RiDeleteBinLine} from 'react-icons/ri'
import '../components/App.css'

const data = [
  {
    key: '1',
    name: 'Infosys',
    Email: 'management@infosys.com',
    Phone: '+91 9563214587',
    CP: 'Vijayent Roy',
    facilitator:'--',
    sites:1,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '2',
    name: 'Wipro',
    Email: 'management@wipro.com',
    Phone: '+91 9834687423 ',
    CP: 'Kalpit Soni',
    facilitator:'--',
    sites:8,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '3',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '4',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '5',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '6',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '7',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '8',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '9',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '10',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '11',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '12',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
  },
  {
    key: '13',
    name: 'Accenture',
    Email: 'management@accenture.com',
    Phone: '+91 8732654789',
    CP: 'Drishti Sane',
    facilitator:'--',
    sites:4,
    Tenants:'--',
    tg:'--'
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

const content = (

  <div> 
  <p style={{textTransform:"capitalize"}}><EyeOutlined /> view details </p>
  <p style={{textTransform:"capitalize"}}><EditOutlined /> edit </p>
  <p style={{textTransform:"capitalize"}}><BiBlock/> block access </p>
  <p style={{textTransform:"capitalize"}}><RiDeleteBinLine /> delete </p>
  </div>
)

const {Sider, Content } = Layout;
const { Search } = Input;
const suffix = (
  <AudioOutlined style={{fontSize: 16,color: '#1890ff', }}/>
);
const onSearch = (value) => console.log(value);
const App = () => {
  const [open,setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        
          
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'name',
      key: '1',
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('name'),
      sorter:(a,b) => b.name.length - a.name.length,
      sortDirections:['ascend','descend']
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: '2',
      ...getColumnSearchProps('Email'),
      sorter:(a,b) => b.Email.length - a.Email.length,
      sortDirections:['ascend','descend']
    },
    {
      title: 'Phone No',
      dataIndex: 'Phone',
      key: '3',
      ...getColumnSearchProps('Phone'),
      sorter:(a,b) => Number(a.Phone.replace(/\s+/g, '')) - Number(b.Phone.replace(/\s+/g, '')),
      sortDirections:['ascend','descend']
    },
  
    {
      title: 'Contact Person',
      dataIndex: 'CP',
      key: '4',
      ...getColumnSearchProps('CP'),
      sorter:(a,b) => a.CP.localeCompare(b.CP),
      sortDirections:['ascend','descend']
    },
    {
      title: 'Facilitator',
      dataIndex: 'facilitator',
      key: '5',
    },
  
    {
      title: 'Sites',
      dataIndex: 'sites',
      key: '6',
      sorter:(a,b) => a.sites - b.sites,
      sortDirections:['ascend','descend']
    },
  
    {
      title: 'Tenants',
      dataIndex: 'Tenants',
      key: '7',
    },
    {
      title: 'Tenant Grade',
      dataIndex: 'tg',
      key: '8',
      sorter:(a,b) => b.tg - a.tg,
      sortDirections:['ascend','descend']
    },
  
    {
      title: 'Action',
      dataIndex: '',
      key: '9',
      render: () => <Popover  placement="leftTop" content={content} onOpenChange={handleOpenChange} trigger="click"> <BsThreeDotsVertical/> </Popover>
    },
  
  ];
  
 return  (
  <>
    {/* <Layout className='layout'>
        <Sider className='sider'>
         <h1>Company Name</h1>
         <Search className='search' placeholder="search modules" onSearch={onSearch} style={{ width: 180,}}/>
         <h3>Client Master</h3>
         <Button className='btn1'>View Client</Button><br/>
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
            <Search className='headersearch' placeholder="search" onSearch={onSearch} style={{ width: 350,height:50}}/>
            <div className="dropdown">
            <Dropdown menu={{items,selectable: true, defaultSelectedKeys: ['3'],}} >
            <Typography.Link>
            <Space className='columns'> Columns
            <DownOutlined />
            </Space>
            </Typography.Link>
            </Dropdown>
            <Button className='btn3'>View Client</Button>
            </div>
            </div>
            <Table columns={columns} dataSource={data} />
          </div>
          

          
        </Content>
  {/* </Layout> */}


  </>
)};
export default App;