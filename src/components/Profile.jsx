import React from 'react'
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Input,Form} from 'antd';
import { Avatar,Button,Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import '../components/Profile.css'
import {RightOutlined} from '@ant-design/icons'
import {Select} from 'antd';
const { Option } = Select;
const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    }]
    
export const Profile = () => {
    const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
}
  return (
    <div>
         <div style={{display:'flex'}}>
        <Avatar className="logo" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<AiOutlinePlus style={{color:'#B8BABC'}}/>}/>
        <div style={{marginLeft:20,marginTop:40}}>
        <h5  style={{display:'inline',fontWeight:500}}>Company Logo</h5>
        <p  style={{paddingTop:0,marginTop:0,fontSize:14}}>Logo ratio shoud be 1:1 and should be 120px X 120 px</p>
        </div>
        </div><br/>
 
        <div className='profile-form'>
        <div className='form-left'>
        
        <Form.Item
        name="cname"
        rules={[
          {
            required: true,
            message: 'Please input your company name!',
          },
        ]}>
        <Input placeholder='Company Name *'/>
        </Form.Item>

        <Select style={{ width: '100%',marginBottom:25}} defaultValue="Select Business Category">
        <Option value="1">Xyz</Option>
        <Option value="2">Xyz</Option>
        </Select>


        <Form.Item
        name="cemail"
        rules={[
          {
            required: true,
            message: 'Please input your company email!',
          },
        ]}>
        <Input placeholder='Company Email Address *'/>
        </Form.Item>

        <Select style={{ width: '100%',marginBottom:25 }} defaultValue="Select State">
        <Option value="1">Xyz</Option>
        <Option value="2">Xyz</Option>
        </Select>

        <Form.Item
        name="gstno"
        rules={[
          {
            required: true,
            message: 'Please input your GST Number!',
          },
        ]}>
        <Input placeholder='GST Number*'/>
        </Form.Item>
        </div>



        <div className='form-left'>
        <Form.Item 
        name="web">
        <Input placeholder='Website'/>
        </Form.Item>

       
        <Select style={{ width: '100%',marginBottom:25}} defaultValue="Select Facility Management Company">
        <Option value="1">Xyz</Option>
        <Option value="2">Xyz</Option>
        </Select>

        
        <Form.Item
        name="phnno"
        rules={[
          {
            required: true,
            message: 'Please input your Phone Number!',
          },
        ]}>
        <Input placeholder='Phone Number*'/>
        </Form.Item>

        <div className='row1'>
        <Select className='col1' defaultValue="Select Facility Management Company">
        <Option value="1">Xyz</Option>
        <Option value="2">Xyz</Option>
        </Select>
        <Form.Item
        name="phno"
        rules={[
          {
            required: true,
            message: 'Please input your Phone Number!',
          },
        ]}>
        <Input placeholder='Phone Number*' className='col1' style={{marginLeft:5,width:'98%'}}/>
        </Form.Item>
        </div>

        <Form.Item 
        name="fax">
        <Input placeholder='Fax Number'/>
        </Form.Item>



        </div>
        <Button
          type="primary"
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Save & Continue <RightOutlined />
        </Button>
        </div>
    </div>
  )
}
