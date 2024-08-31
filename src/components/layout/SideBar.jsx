"use client";
import React from 'react';
import {  useRouter} from 'next/navigation';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const SideBar = () => {
  const router = useRouter();  

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        overflow: 'scroll initial',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',   
        borderRight: '4px solid #e2e8f0',
      }}
    >
      <CDBSidebar textColor="#000" backgroundColor="#fff9f9">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
     
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem
              onClick={() => router.push('/')}
              icon="fas fa-tachometer-alt"
              style={{ cursor: 'pointer' }}
            >
              Dashboard
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem
              onClick={() => router.push('/settings')}
              icon="user"
              style={{ cursor: 'pointer' }}
            >
             settings
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem
           
              icon="fas fa-bell"
              style={{ cursor: 'pointer' }}
            >
               Profile
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
             
              icon="sign-out-alt"
              style={{ cursor: 'pointer' }}
            >
              Login
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}></CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
