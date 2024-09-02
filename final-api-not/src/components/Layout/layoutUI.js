import React from 'react';
import { UserOutlined, PoweroffOutlined,HomeOutlined } from '@ant-design/icons';
import HeadImg from '../../assets/images/360_F_187916278_90eJLWBchMe4ZCwX1N2L2NCg54CtizDh.png';
import { Layout, Menu } from 'antd';
import Home from '../Home/Home';
const { Header, Content, Footer, Sider } = Layout;

const LayoutUI =() =>{
    const  colorBgContainer = "#e4e4e4";
    const MenuList = [
        {
            label:"Home",
            icon:<HomeOutlined />
        },
        {
            label:"Profile",
            icon:<UserOutlined />,
            disable:true
        },
        {
            label:"Logout",
            icon:<PoweroffOutlined />,
            disable:true
        },
    ]
    return (
        <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" > 
                <img src={HeadImg} className='header-logo' />
        </div>
       
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={MenuList.map(
            (item,index) => ({
              key: String(index + 1),
              icon: item.icon,
              label: item.label,
              disabled: item.disable
            }),
          )}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '90vh',
              background: colorBgContainer,
              border:'1px solid #efefef',
              borderRadius:10,
            }}
          >
            <Home/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
         Propertia ©2023 Created by Humna Kashif
        </Footer>
      </Layout>
    </Layout>
    )
}

export default LayoutUI