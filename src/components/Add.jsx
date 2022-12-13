import React, { useMemo, useEffect, useState } from 'react';
import '../components/Add.css'
import { AudioOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import { Profile } from './Profile';
import { Steps,Breadcrumb,message } from 'antd';
import Payment from './Payment';



const suffix = (
  <AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />
);


const Add = () => {

 

  const steps = useMemo(() => [
    {
      title: 'First',
      content:<Profile/>,
    },
    {
      title: 'Second',
      content: <Payment/>,
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ],[]);


  const [current, setCurrent] = useState(0);
  
  <h1 style={{fontSize:24,marginLeft:25,color:' #030037'}}>View Client
          <Breadcrumb>
          <Breadcrumb.Item>Client Master</Breadcrumb.Item>
          <Breadcrumb.Item>
          <a href="" style={{color:'#B8BABC'}}>View Client</a>
          </Breadcrumb.Item>
          </Breadcrumb>
          </h1>
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
    <div style={{float:'left'}}>
         <div>
          <h1 style={{fontSize:24,marginLeft:25,color:' #030037'}}>Add Client
          <Breadcrumb>
          <Breadcrumb.Item>Client Master</Breadcrumb.Item>
          <Breadcrumb.Item>Add Client</Breadcrumb.Item>
          <Breadcrumb.Item>
          <a href="" style={{color:'#B8BABC'}}> Create Profile</a>
          </Breadcrumb.Item>
          </Breadcrumb>
          </h1>
          </div>


      <Steps size='small' current={current} items={items}
        onChange={onChange} className="site-navigation-steps" type="navigation" />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button className='next' type="primary" onClick={() => next()}>
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
      </div>
    </>
  )

}

export default Add;