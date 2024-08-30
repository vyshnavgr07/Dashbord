"use client";

import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';


const SideBar = () => {


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
      <CDBSidebar textColor="000" backgroundColor="#00FFFF">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div
            className="text-decoration-none"
            style={{ color: 'inherit', cursor: 'pointer' }}
            onClick={() => router.push('/')}
          >
            Blog up
          </div>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem
              icon="fas fa-tachometer-alt"
              style={{ cursor: 'pointer' }}
            >
              Dashboard
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="user"
              style={{ cursor: 'pointer' }}
            >
              Profile
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="fas fa-bell"
              style={{ cursor: 'pointer' }}
            >
              Create Blog
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="sign-out-alt"
              onClick={() => router.push('/login')}
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
