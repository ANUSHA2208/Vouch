import React from 'react'
import { useState } from 'react';
import { Input,Form,Button,Checkbox,Select,Radio} from 'antd';
import '../components/Profile.css'


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const plainOptions = ['UPI', 'Net Banking', 'Cash','Cheque','Other'];
const options = [
  {
    label: 'UPI',
    value: 'upi',
  },
  {
    label: 'Net Banking',
    value: 'nb',
  },
  {
    label: 'Cash',
    value: 'cash',
  },
  {
    label: 'Cheque',
    value: 'cheque',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export const Payment = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
        <div className='label'>
        <h2>Payment Setup</h2>
        <p>Setup payment for the client</p>
        </div>
  

        <div >
        <Form.Item 
         name="Company Name"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='Company Name' className='basic'/>
      </Form.Item>
        <div className="row1">
        <div className="column1">
        
        <Form {...layout} form={form} name="control-hooks">
        
        <Form.Item 
         name="Company Name"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='Company Name' className='Input'/>
      </Form.Item>



      <Form.Item
        name="Business Category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select className='select' style={{width:800,marginLeft:32}} placeholder="Select Business Category" allowClear>
          <Option value="1">xyx</Option>
          <Option value="2">xyz</Option>
        </Select>
      </Form.Item>

    
      <Form.Item 
         name="Company Email"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className='Input' placeholder='Company Email Address'/>
      </Form.Item>
      <p style={{marginLeft:32}}>Payment Mode</p>
</Form>
<div>
 <Checkbox.Group style={{marginLeft:32,paddingBottom:25}} options={plainOptions} defaultValue={['Cash']} onChange={onChange} />
   </div>
 </div>
        <div className="column1">
        
        <Form {...layout} form={form} name="control-hooks">

        <div style={{display:'flex'}}>
    <Form.Item
        name="City"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select className='select' style={{width:500,marginLeft:0}}
          placeholder="Select City"
          allowClear
        >
          <Option value="1">xyx</Option>
          <Option value="2">xyz</Option>
        </Select>
      </Form.Item>

      <Form.Item 
         name="Pincode"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className='Input1' placeholder='Pincode'/>
      </Form.Item>
 </div>
 
 
    <Input.Group compact>
      <Input
        style={{
          width: '81%',
          marginLeft:0,
          marginBottom:24
        }}
        placeholder='Payable Amount per site'
      />
      <Input
        style={{
          width: '18.5%',
        }}
        placeholder="Total"
      />
    </Input.Group>


    
      <Form.Item 
         name="Moblie Number"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className='Input' style={{marginLeft:0,width:775}} placeholder='Moblie Number'/>
      </Form.Item>
</Form>



   
    <p>Payment Status</p>

        </div>
        <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Paid</Radio>
      <Radio value={2}>Unpaided</Radio>
      </Radio.Group>
        </div>
        
        
 </div>
    </div>
  )
}


export default Payment;

