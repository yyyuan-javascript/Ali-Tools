
import './App.css';
import { Layout, Menu } from 'antd';

import ProductDetailForm from './components/product-detail-form';
import Preview from './components/preview';
import { useState } from 'react';
const { Header, Content, Sider } = Layout;

const App =()=> {
  const [fields, setFields] = useState({chainLength:"",
    craft:"",
    material:"",
    pendantSize:"",
    productName:"",});

    const [isOnline,setIsOnline] = useState(true);
  // console.log(fields);
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">nav 1</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
      <ProductDetailForm onChangeCb={(fields)=>{setFields(fields);}}/>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Preview {...{fields}}/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}

export default App;
