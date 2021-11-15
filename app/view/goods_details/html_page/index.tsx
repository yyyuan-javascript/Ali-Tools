import React from 'react';
import { Layout, Menu } from 'antd';

import ProductDetailForm from '@components/product-detail-form';
import Preview from '@components/preview';
import { useState, useRef } from 'react';
import {Fields} from '@components/product-detail-form/src/interface';
import './index.css';

const { Header, Content, Sider } = Layout;
const App = () => {
  const [fields, setFields] = useState<Fields>({} as Fields);
const previewRef = useRef<HTMLDivElement>(null);
const getPreviewHtml = ():string=>{
  // debugger;
  return  (previewRef && previewRef.current && previewRef.current.outerHTML)||"";
  
};
  // const [isOnline, setIsOnline] = useState(true);
  // console.log(fields);
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">{'宝贝详情编辑器'}</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <ProductDetailForm 
          onChangeCb={(fields) => { setFields(fields); }}
          onlineClickCb={getPreviewHtml}
          />
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
            <Preview {...{ fields,selfRef:previewRef }} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
