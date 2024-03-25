"use client";

import style from "./logoutButton.module.css"
export default function LogoutButton() {
    const me = {
        id: 'isupportryu',
        nickname: '류성원',
        image: '/5Udwvqim.jpg',

    }

    const onLogout = () => {

    };
    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <img alt={me.id} src={me.image}></img>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
};