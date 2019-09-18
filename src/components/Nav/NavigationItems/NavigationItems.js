import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="navbar-nav mx-auto">
        <NavigationItem link="/" exact>About Us</NavigationItem>
        <NavigationItem link="/course">Khóa Học</NavigationItem>
        <NavigationItem link="/blog">Blog</NavigationItem>
        <NavigationItem link="/student">Học Viên</NavigationItem>
        <NavigationItem link="/document">Tài Liệu</NavigationItem>
        <NavigationItem link="/contact">Liên Hệ</NavigationItem>           
    </ul>
)

export default navigationItems;