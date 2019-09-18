import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import './HorizontalNav.scss';

const horizontalNav = () => (
    <div className="horizontal_menu">
        <ul className="navbar-nav">
            <NavigationItem link="/" exact>About Us</NavigationItem>
            <NavigationItem link="/course">Khóa Học</NavigationItem>
            <NavigationItem link="/blog">Blog</NavigationItem>
            <NavigationItem link="/student">Học Viên</NavigationItem>
            <NavigationItem link="/document">Tài Liệu</NavigationItem>
            <NavigationItem link="/contact">Liên Hệ</NavigationItem>            
        </ul>
    </div>
)

export default horizontalNav;