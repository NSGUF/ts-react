import {storage} from "../../utils/common";

export const menusInfo = [
    {
        "menuName": "首页",
        "menuUrl": "/",
        "menuKey": "index",
        "subMenu": [],
        "icon":""
    },
    {
        "menuName": "在线报修",
        "menuUrl": "/online/repair",
        "menuKey": "repair",
        "subMenu": [],
        "icon":""
    },
    {
        "menuName": "在线接单",
        "menuUrl": "/online/order",
        "menuKey": "order",
        "subMenu": [],
        "icon":""
    },
    {
        "menuName": "服务保障",
        "menuUrl": "/service/guarantee",
        "menuKey": "guarantee",
        "subMenu": [],
        "icon":""
    },
    {
        "menuName": "找ROM包",
        "menuKey": "looking/rom",
        "menuUrl": "/looking/rom",
        "icon":"up",
        "subMenu": [
            {
                "menuName": "ROM下载",
                "menuKey": "rom",
                "menuUrl": "/looking/rom",
                "icon":"",
                "subMenu": []
            },
            {
                "menuName": "ROM大师",
                "menuKey": "master",
                "menuUrl": "/looking/master",
                "icon":"",
                "subMenu": []
            }
        ]
    }
]

export const loginInfo = [{
    "menuName": "登陆",
    "menuUrl": "/login",
    "menuKey": "login",
    "subMenu": []
}]

export let userInfo = {
    "menuName": "userName"+storage.getLocal("userName"),
    "menuImage": "menuImage"+storage.getLocal("userPic"),
    "menuKey":"management",
    "menuUrl": "/order/management",
    "icon":"caret-down",
    "subMenu": [
        {
            "menuName": "订单管理",
            "menuKey": "rom",
            "menuUrl":  "/order/management",
            "icon":"",
            "subMenu": []
        },
        {
            "menuName": "消息",
            "icon":"",
            "menuKey": "message",
            "menuUrl": "/user/message",
            "subMenu": []
        },
        {
            "menuName": "安全退出",
            "menuKey": "loginOut",
            "menuUrl": "/login/out",
            "icon":"",
            "subMenu": []
        }
    ]
};
export let menus = {
    userInfo,
    loginInfo,
    menusInfo
}