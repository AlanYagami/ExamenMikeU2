import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

const AdminLayout = () => {
  return (
    <>
      {
        user.user.person?.name + " " + user.user.person?.surname + " " + `${user.user.person?.lastname ?? ''}` + " - " + user?.roles[0]?.name
      }
    </>
  );
};

export default AdminLayout;
