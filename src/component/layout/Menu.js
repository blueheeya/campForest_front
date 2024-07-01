import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    const Menu = [
        {
            name: "홈",
            url: "/home",
            active: true,
        },
        {
            name: "별숲 기록",
            url: "/diary/list",
            active: true,
        },
        {
            name: "별숲 스토어",
            url: "/store/list",
            active: true,
        },
        {
            name: "마이페이지",
            url: "/user/mypage",
            active: true,
        },
    ];
    return (
        <ul className="menuWrap">
            {Menu.map((menu, index) => {
                return (
                    <li key={index}>
                        <div className={menu.active ? "active" : ""}>
                            <NavLink to={menu.url}>{menu.name}</NavLink>
                            {/* {menu.name} */}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default Menu;
