import {Avatar, Icon, Menu} from 'antd';
import * as React from 'react';

import {Link} from 'react-router-dom'
import {storage} from "../../utils/common";
import {menus} from './menus'

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default class Navigation extends React.Component {
    public state = {
        current: menus.menusInfo[0].menuKey,
        isLogin: true
    };

    public handleClick = (e: any) => {
        const event = e;
        this.setState({
            current: event.key,
        });
    };

    public getMenusHtml = (menusInfo: object[]) => {
        const items: JSX.Element[] = [];
        if (menusInfo.length != 0) {
            menusInfo.forEach(
                (item: any) => {
                    if (item.subMenu instanceof Array && item.subMenu.length > 0) {
                        const subItems: JSX.Element[] = [];
                        item.subMenu.forEach(
                            (subItem: any) => {
                                subItems.push(
                                    <Menu.Item key={subItem.menuKey}>
                                        <Link to={subItem.menuUrl}>
                                            {subItem.menuName}<Icon type={subItem.icon}/>
                                        </Link>
                                    </Menu.Item>
                                );
                            }
                        );
                        items.push(
                            <SubMenu key={item.menuKey} title={<Link to={item.menuUrl}>
                                {item.menuName}<Icon type={item.icon}/>
                            </Link>}>
                                {subItems}
                            </SubMenu>)
                    } else {
                        items.push(
                            <Menu.Item key={item.menuKey}>
                                <Link to={item.menuUrl}>
                                    {item.menuName}<Icon type={item.icon}/>
                                </Link>
                            </Menu.Item>
                        );
                    }
                }
            );
        }
        return items;
    };

    public render() {
        const menusInfoJSX: JSX.Element[] = this.getMenusHtml(menus.menusInfo);
        const userJSX: JSX.Element[] = [];
        if (this.state.isLogin) {
            const userInfo = menus.userInfo;
            const subItems: JSX.Element[] = [];
            userInfo.subMenu.forEach(
                (subItem: any) => {
                    const message: JSX.Element[] = [];
                    if(subItem.menuKey==='message'){
                        message.push(<span style={{fontSize:'14px',color:'#686868'}}>(12{storage.getLocal("userMessage")})</span>)
                    }
                    subItems.push(
                        <Menu.Item key={subItem.menuKey}>
                            <Link to={subItem.menuUrl}>
                                {subItem.menuName}{message}<Icon type={subItem.icon}/>
                            </Link>
                        </Menu.Item>
                    );
                }
            );
            userJSX.push(
                <SubMenu title={<span><Avatar src={userInfo.menuImage?userInfo.menuImage:undefined}/>{userInfo.menuName}<Icon type={userInfo.icon}/></span>}>
                    {subItems}
                </SubMenu>
            )
        } else {
            const loginInfo = menus.loginInfo;
            loginInfo.forEach((item: any) => {
                userJSX.push(<Menu.Item key={item.menuKey}>
                    <Link to={item.menuUrl}>
                        {item.menuName}<Icon type={item.icon}/>
                    </Link>
                </Menu.Item>)
            })
        }
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    {menusInfoJSX}
                    {userJSX}
                </Menu>
            </div>
        );
    }
}